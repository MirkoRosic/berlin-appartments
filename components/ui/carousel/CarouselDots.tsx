import { FC, useContext } from 'react';
import { View } from 'react-native';
import { AppContext, ImageType } from '../../../context/context';
import carouselStyles from './carouselStyles';

type CarouselDotsProps = {
  currentIndex: number;
};

export const CarouselDots: FC<CarouselDotsProps> = ({ currentIndex }) => {
  const { state } = useContext(AppContext);

  const images = state.appartment!.images;

  return (
    <View style={carouselStyles.dotContainer}>
      {images.map((image: ImageType, index: number) => {
        return (
          <View
            key={image.url + index}
            style={[carouselStyles.dot, index === currentIndex && carouselStyles.dotActive]}
          ></View>
        );
      })}
    </View>
  );
};
