import { ScrollView } from 'react-native';
import { ImageCarousel } from '../components/ui/carousel/ImageCarousel';
import { CondoDescription } from '../components/ui/description/CondoDescription';

export const SingleCondo = () => {
  return (
    <ScrollView>
      <ImageCarousel />
      <CondoDescription />
    </ScrollView>
  );
};
