import React, { FC, useContext, useRef, useState } from 'react';
import { FlatList, Pressable, View } from 'react-native';
import { Slide } from './Slide';
import carouselStyles from './carouselStyles';
import { CarouselDots } from './CarouselDots';
import { AppContext } from '../../../context/context';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MapStackNavigationProp } from '../../../navigation/types';

export const ImageCarousel: FC = () => {
  const { state } = useContext(AppContext);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const navigation = useNavigation<MapStackNavigationProp>();

  const images = state.appartment!.images;

  const onViewRef = useRef((viewableItems: any) => {
    if (viewableItems.viewableItems.length > 0) {
      setCurrentIndex(viewableItems.viewableItems[0].index);
    }
  });

  return (
    <View style={carouselStyles.carouselContainer}>
      <Pressable onPress={() => navigation.goBack()} style={carouselStyles.backButton}>
        <EvilIcons name="close" size={22} color="black" />
      </Pressable>
      <FlatList
        data={images}
        renderItem={({ item }) => <Slide image={item} key={item.url} />}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        initialNumToRender={5}
        maxToRenderPerBatch={5}
        scrollEventThrottle={16}
        windowSize={2}
        onViewableItemsChanged={onViewRef.current}
      />
      <CarouselDots currentIndex={currentIndex} />
    </View>
  );
};
