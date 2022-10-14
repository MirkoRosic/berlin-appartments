import { Image, View } from 'react-native';
import { FC } from 'react';
import slideStyles from './carouselStyles';
import type { ImageType } from '../../../context/context';

type SlideProps = {
  image: ImageType;
};

export const Slide: FC<SlideProps> = ({ image }) => {
  return (
    <View style={slideStyles.slideContainer}>
      <Image source={{ uri: image.url }} style={slideStyles.slide} />
    </View>
  );
};
