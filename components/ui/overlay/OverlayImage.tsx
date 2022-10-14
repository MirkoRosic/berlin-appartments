import { ImageBackground, Text, View } from 'react-native';
import styles from '../../../screens/styles/stylesMap';
import { FontAwesome } from '@expo/vector-icons';
import { AppContext } from '../../../context/context';
import { useContext } from 'react';
import { colorOrange } from '../../../globalStyles';

export const OverlayImage = () => {
  const { state } = useContext(AppContext);
  const condo = state.appartment!;
  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        source={{ uri: condo.images[0].url }}
        resizeMode="cover"
        style={styles.image}
      />
      <View style={styles.rating}>
        <Text style={styles.ratingText}>
          4.5 <FontAwesome name="star" size={12} color={colorOrange} />
        </Text>
      </View>
    </View>
  );
};
