import { StyleSheet } from "react-native";
import { colorGray, colorGrayLight, colorGreen, colorGreenLight, colorOrange, colorOverlay, colorWhite, mainFont } from "../../../globalStyles";

export default descriptionStyles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        paddingTop: 10,
        paddingBottom: 8,
        backgroundColor: colorOverlay,
    },
    headline: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8,
    },
    description: {
        fontFamily: 'point',
        fontSize: 13,
        lineHeight: 18,
        letterSpacing: 0.9,
        color: colorGray,
        borderBottomColor: colorGrayLight,
        borderBottomWidth: 1,
        paddingBottom: 14,
    },
    rating: {
        borderWidth: 1,
        borderColor: colorGrayLight,
        borderRadius: 3,
        width: 70,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: 2,
    },
    ratingText: {
        fontFamily: mainFont,
        fontSize: 18,
        fontWeight: "bold",
        color: colorGray,
    },
    orange: {
        color: colorOrange
    },
    typesHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colorGray,
        letterSpacing: 0.5,
        marginTop: -5,
        fontFamily: mainFont
    },
    typesContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 100,
    },
    typesButton: {
        backgroundColor: colorGreenLight,
        padding: 7,
        marginRight: 8,
        borderRadius: 3,
        fontFamily: mainFont,
        marginTop: 8,
    },
    typesText: {
        color: colorGray,
        fontSize: 14,
    },
    footerContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colorGreenLight,
        paddingVertical: 7,
    },
    footerText: {
        lineHeight: 20,
        fontSize: 14,
        color: colorGray,
    }, 
    footerButton: {
        backgroundColor: colorGreen,
        borderRadius: 3,
        paddingHorizontal: 12,
        paddingVertical: 12,
    }, 
    footerButtonText: {
        color: colorWhite,
        textTransform: 'uppercase',
        letterSpacing: 3,
        lineHeight: 20,
        fontSize: 16,
    },
    });