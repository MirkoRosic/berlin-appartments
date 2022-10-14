import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { AppContext } from '../../../context/context';
import { colorOrange } from '../../../globalStyles';
import { Ionicons } from '@expo/vector-icons';
import styles from '../../../screens/styles/stylesMap';

export const OverlayText = () => {
  const { state } = useContext(AppContext);
  const condo = state.appartment!;

  return (
    <View style={styles.text}>
      <Text style={styles.textStreet}>{condo.street}</Text>
      <View style={styles.textDistanceContainer}>
        <Ionicons name="location-outline" size={20} color={colorOrange} />
        <Text style={styles.textDistance}>{condo.distance.toFixed(1)} km from city center</Text>
      </View>
      <Text style={styles.textPrice}>
        From <Text style={[styles.bold, styles.orange]}>{condo.lowest_price_per_night || '-'}</Text>
        <Text style={styles.orange}>/Night</Text>
      </Text>
    </View>
  );
};
