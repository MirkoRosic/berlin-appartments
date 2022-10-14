import { Dimensions, StyleSheet } from "react-native";
import { colorGray, colorWhite,  colorOrange, colorOverlay, colorGrayLight, mainFont, headingFont } from '../../globalStyles';

export default styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  mapContainer: {
  display: "flex",
  alignItems: 'center'
  },
  });