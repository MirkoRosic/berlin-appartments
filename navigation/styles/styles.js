import { StyleSheet } from "react-native";
import { colorGreen } from '../../globalStyles';

export default styles = StyleSheet.create({
  tabBarStyle: {
    paddingBottom: 7,
    paddingTop: 7,
    height: 55,
    backgroundColor: colorGreen,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 3,
    position: 'absolute',
  }, 
  tabItemStyle: {
    marginHorizontal: 15,
    borderRadius: 8,
    flex: 1,
  },
  tabLabelStyle: {
    letterSpacing: 1.2,
  }
  });