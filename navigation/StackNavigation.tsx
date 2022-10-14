import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SingleCondo } from '../screens/SingleCondoScreen';
import { TabNavigator } from './TabNavigation';
import { MapStackNavigatorParamList } from './types';

const MapStack = createNativeStackNavigator<MapStackNavigatorParamList>();

export const StackNavigator = () => {
  return (
    <MapStack.Navigator>
      <MapStack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
      <MapStack.Screen
        name="SingleCondo"
        component={SingleCondo}
        options={{ headerShown: false }}
      />
    </MapStack.Navigator>
  );
};
