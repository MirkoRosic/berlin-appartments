import { MaterialIcons } from '@expo/vector-icons';
import Ionicons from '@expo/vector-icons/FontAwesome5';
import { colorWhite } from '../globalStyles';

const iconSize = 20;

export const routes = {
  Search: {
    icon: <MaterialIcons name="search" size={iconSize} color={colorWhite} />,
    tab: 'Search',
  },
  Map: {
    icon: <Ionicons name="map-marked-alt" size={iconSize} color={colorWhite} />,
    tab: 'Map',
  },
  Saved: {
    icon: <MaterialIcons name="favorite-border" size={iconSize} color={colorWhite} />,
    tab: 'Saved',
  },
  Profile: {
    icon: <MaterialIcons name="account-circle" size={iconSize} color={colorWhite} />,
    tab: 'Profile',
  },
};
