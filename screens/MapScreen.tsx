import { useContext, useState, useEffect } from 'react';
import { View } from 'react-native';
import { AppContext } from '../context/context';
import { ActionType } from '../context/reducers';
import { getAll, getOne } from '../service/appartmentService';
import { mapStartPoint } from '../utils/helpers';
import styles from './styles/stylesMap';
import MapView, { Marker } from 'react-native-maps';
import { CustomMarker } from '../components/ui/CustomMarker';
import { Overlay } from '../components/ui/overlay/Overlay';

export const MapScreen = () => {
  const { state, dispatch } = useContext(AppContext);

  const [activeIndex, setActiveIndex] = useState<number>();

  useEffect(() => {
    const loadMapData = async () => {
      const mapData = await getAll();
      dispatch({
        type: ActionType.GET_ALL,
        payload: { ...mapData, appartments: mapData.payload },
      });
    };
    loadMapData();
  }, []);

  return (
    <View style={styles.mapContainer}>
      <MapView style={styles.map} initialRegion={mapStartPoint} toolbarEnabled={false}>
        {state.appartments.map((condo) => {
          const latLang = { latitude: condo.location.lat, longitude: condo.location.lng };
          return (
            <Marker
              coordinate={latLang}
              key={condo.id}
              onPress={async () => {
                const condoData = await getOne(condo.id);
                dispatch({
                  type: ActionType.GET_ONE,
                  payload: { ...condoData, appartment: condoData.payload },
                });
                setActiveIndex(condo.id);
              }}
            >
              <CustomMarker isActive={activeIndex === condo.id} />
            </Marker>
          );
        })}
      </MapView>
      <Overlay />
    </View>
  );
};
