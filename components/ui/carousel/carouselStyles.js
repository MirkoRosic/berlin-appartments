import { Dimensions, StyleSheet } from "react-native";
import { colorGray, colorWhite } from "../../../globalStyles";

export default styles = StyleSheet.create({
    slideContainer: {
      width: Dimensions.get('window').width,
      justifyContent: 'center',
      alignItems: 'center',
    },
    slide: {
      backgroundColor: 'black',
      width: '100%',
      height: 235,  
    },
    carouselContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
    },
    dotContainer: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      position: 'absolute',
      justifyContent: 'center',
      width: '90%',
      top: 220,
    },
    dot: {
      borderRadius: 50,
      backgroundColor: colorWhite,
      borderWidth: 1,
      borderColor: colorWhite,
      height: 6,
      width: 6,
      marginRight: 5,
    },
    dotActive: {
      backgroundColor: colorGray
    },
    backButton: {
      position: 'absolute',
      top: 10,
      left: 10,
      backgroundColor: colorWhite,
      zIndex: 1,
      borderRadius: 3,
      padding: 7,
      height: 35,
      width: 37,
      display: 'flex',
      justifyContent: 'center',
    }
    });