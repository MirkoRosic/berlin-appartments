import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type MapStackParamList = {
  Home: undefined;
  SingleCondo: { id: number };
};

export type TabNavigatorParamList = {
  Search: undefined;
  Map: MapStackParamList;
  Saved: undefined;
  Profile: undefined;
};

export type MapStackNavigatorParamList = {
  Tabs: undefined;
  SingleCondo: {
    id: number;
  };
};

export type MapStackNavigationProp = NativeStackNavigationProp<MapStackNavigatorParamList>;
