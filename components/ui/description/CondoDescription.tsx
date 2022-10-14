import { useContext } from 'react';
import { Text, View } from 'react-native';
import { AppContext } from '../../../context/context';
import descriptionStyles from './descriptionStyle';
import { DescriptionHeader } from './DescriptionHeader';
import { DescriptionLocation } from './DescriptionLocation';

export const CondoDescription = () => {
  const { state } = useContext(AppContext);
  const condo = state.appartment!;
  return (
    <View style={descriptionStyles.container}>
      <DescriptionHeader />
      <DescriptionLocation />
      <Text style={descriptionStyles.description}>{condo.description}</Text>
    </View>
  );
};
