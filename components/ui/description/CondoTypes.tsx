import { useContext } from 'react';
import { Pressable, Text, View } from 'react-native';
import { AppContext } from '../../../context/context';
import descriptionStyles from './descriptionStyle';
export const CondoTypes = () => {
  const { state } = useContext(AppContext);

  const groups = state.appartment!.unit_groups;

  const suiteTypes = new Set(
    groups.map((unit) => {
      return unit.max_guests + 'x' + unit.bedroom_count;
    })
  );

  return (
    <View style={descriptionStyles.container}>
      <Text style={descriptionStyles.typesHeader}>Room types available in this location</Text>
      <View style={descriptionStyles.typesContainer}>
        {[...suiteTypes].map((group, index) => {
          return (
            <Pressable style={descriptionStyles.typesButton} key={group + index}>
              <Text style={descriptionStyles.typesText}>{group} Bedroom Suites </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};
