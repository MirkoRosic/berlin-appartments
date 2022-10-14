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
    }
    });