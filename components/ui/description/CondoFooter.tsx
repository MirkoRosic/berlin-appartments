import { View, Text, Pressable } from 'react-native';
import descriptionStyle from './descriptionStyle';
import { Ionicons } from '@expo/vector-icons';
import { colorWhite } from '../../../globalStyles';
import { AppContext } from '../../../context/context';
import { useContext } from 'react';

export const CondoFooter = () => {
  const { state } = useContext(AppContext);

  const condo = state.appartment;

  return (
    <View style={descriptionStyle.footerContainer}>
      <Text style={descriptionStyle.footerText}>
        From
        <Text style={descriptionStyle.orange}>
          {condo?.lowest_price_per_night ||
            condo?.lowest_price_per_month ||
            ' ' + 30 + '\u20AC/night'}
        </Text>
      </Text>
      <Pressable style={descriptionStyle.footerButton}>
        <Text style={descriptionStyle.footerButtonText}>
          Explore <Ionicons name="arrow-forward" color={colorWhite} size={16} />
        </Text>
      </Pressable>
    </View>
  );
};
