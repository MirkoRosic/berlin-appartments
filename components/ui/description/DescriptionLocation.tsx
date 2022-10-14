import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { AppContext } from '../../../context/context';
import { colorOrange } from '../../../globalStyles';
import stylesMap from '../../../screens/styles/stylesMap';
import { Ionicons } from '@expo/vector-icons';

export const DescriptionLocation = () => {
  const { state } = useContext(AppContext);
  const condo = state.appartment!;
  return (
    <View
      style={[
        stylesMap.textDistanceContainer,
        { borderBottomWidth: 0, marginTop: 5, marginBottom: 6 },
      ]}
    >
      <Ionicons name="location-outline" size={20} color={colorOrange} />
      <Text style={stylesMap.textDistance}>{condo.distance.toFixed(1)} km from city center </Text>
    </View>
  );
};
