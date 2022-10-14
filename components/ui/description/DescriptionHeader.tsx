import { Text, View } from 'react-native';
import descriptionStyles from './descriptionStyle';
import stylesMap from '../../../screens/styles/stylesMap';
import { FontAwesome } from '@expo/vector-icons';
import { colorOrange } from '../../../globalStyles';
import { useContext } from 'react';
import { AppContext } from '../../../context/context';

export const DescriptionHeader = () => {
  const { state } = useContext(AppContext);
  const condo = state.appartment!;
  return (
    <View style={descriptionStyles.headline}>
      <Text style={[stylesMap.textStreet, { marginTop: 0 }]}>{condo.street}</Text>
      <View style={descriptionStyles.rating}>
        <Text style={descriptionStyles.ratingText}>
          4.5 <FontAwesome name="star" size={20} color={colorOrange} />
        </Text>
      </View>
    </View>
  );
};
