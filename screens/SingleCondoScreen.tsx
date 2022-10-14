import React from 'react';
import { ScrollView } from 'react-native';
import { ImageCarousel } from '../components/ui/carousel/ImageCarousel';
import { CondoDescription } from '../components/ui/description/CondoDescription';
import { CondoFooter } from '../components/ui/description/CondoFooter';
import { CondoTypes } from '../components/ui/description/CondoTypes';

export const SingleCondo = () => {
  return (
    <ScrollView>
      <ImageCarousel />
      <CondoDescription />
      <CondoTypes />
      <CondoFooter />
    </ScrollView>
  );
};
