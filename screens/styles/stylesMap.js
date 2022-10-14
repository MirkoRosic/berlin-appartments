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
    overlay: {
        position: 'absolute',
        bottom: 95,
        width: '90%',
        height: 115,
        borderColor: colorGrayLight,
        borderWidth: 1,
        borderRadius: 3,
        backgroundColor: colorOverlay,
        display: 'flex',
        flexDirection: 'row',
      },
      imageContainer: {
        width: '33%',
        height: 'auto',
        position: 'relative',
      },
      image: {
        width: '100%',
        height: '100%',
      },
      rating: {
        position: 'absolute',
        top: 8,
        right: 5,
        height: 20,
        width: 42,
        lineHeight: 20,
        backgroundColor: colorOverlay,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colorOverlay,
        borderWidth: 1,
        borderRadius: 3,
        paddingHorizontal: 5,
      },
      ratingText: {
        fontSize: 11,
      },
    
      text: { 
        display: 'flex',
        flex: 1,
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
      },
      textStreet: {
        fontFamily: headingFont,
        fontSize: 22,
        marginTop: 12,
        color: colorGray,
      },
      textDistanceContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        borderBottomColor: colorGrayLight,
        borderBottomWidth: 1,
        width: '100%',
        paddingBottom: 7,
      },
      textDistance: {
        fontFamily: mainFont,
        color: colorGray,
        fontSize: 13,
        marginLeft: 5,
      },
      textPrice: {
        fontFamily: mainFont,
        marginBottom: 12,
        color: colorGray,
      },
      bold: {
        fontWeight: 'bold'
      },
      orange: {
        color: colorOrange
      },
      markerContainer: {
        height: 50,
        width: 40,
      },
      marker: {
        backgroundColor: colorGray,
        borderRadius: 5,
        height: 40,
        width: 40,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      markerPointer: {
       backgroundColor: colorGray,
       width: 20,
       height: 20,
       position: 'absolute',
       top: 21,
       borderRadius: 3,
       transform: [{rotate: '45deg'}],
       zIndex: - 1,
      },
      markerText: {
        color: colorWhite
      }, 
      active: {
        backgroundColor: colorOrange,
      },
      activePointer: {
        backgroundColor: colorOrange,
      },
      activePopup: {
        zIndex: 100,
      }
  });