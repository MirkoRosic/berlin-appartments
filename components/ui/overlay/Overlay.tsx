import { useNavigation } from '@react-navigation/native';
import React, { FC, useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import { AppContext } from '../../../context/context';
import { MapStackNavigationProp } from '../../../navigation/types';
import styles from '../../../screens/styles/stylesMap';
import { OverlayImage } from './OverlayImage';
import { OverlayText } from './OverlayText';

export const Overlay: FC = (): JSX.Element => {
  const { state } = useContext(AppContext);
  const navigation = useNavigation<MapStackNavigationProp>();
  const condo = state.appartment;

  return (
    <>
      {condo && (
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => navigation.navigate('SingleCondo', { id: condo.id })}
        >
          <OverlayImage />
          <OverlayText />
        </TouchableOpacity>
      )}
    </>
  );
};
