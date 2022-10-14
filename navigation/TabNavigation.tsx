import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { MapScreen } from '../screens/MapScreen';
import { BookmarksScreen } from '../screens/BookmarkScreen';
import { TabNavigatorParamList } from './types';
import { routes } from '../utils/helpers';
import styles from './styles/styles';
import { colorWhite } from '../globalStyles';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          const iconName = routes[route.name].icon;
          return iconName;
        },
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveBackgroundColor: '#5b7052',
        tabBarInactiveTintColor: colorWhite,
        tabBarActiveTintColor: colorWhite,
        animationEnabled: true,
        tabBarItemStyle: styles.tabItemStyle,
        stackAnimation: 'none',
        tabBarLabelStyle: styles.tabLabelStyle,
      })}
    >
      <Tab.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Map" component={MapScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Saved" component={BookmarksScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};
