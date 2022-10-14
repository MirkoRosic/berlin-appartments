import { FC } from 'react';
import { Text, View } from 'react-native';
import styles from '../../screens/styles/stylesMap';

type CustomMarkerProps = {
  isActive: boolean;
};

export const CustomMarker: FC<CustomMarkerProps> = ({ isActive }) => {
  return (
    <View style={[styles.markerContainer]}>
      <View style={[styles.marker, isActive && styles.active]}>
        <Text style={styles.markerText}>55{'\u20AC'}</Text>
        <View style={[styles.markerPointer, isActive && styles.activePointer]}></View>
      </View>
    </View>
  );
};
