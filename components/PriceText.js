import React from "react";
import { StyleSheet, Text } from "react-native";

const PriceText = ({children, style}) => {
    return(
        <Text style = {[styles.PriceStyle, style]}>{children}</Text>
    )
}
const styles = StyleSheet.create({
    PriceStyle:{
        fontSize: 22,
        fontWeight:'bold',
        color:'red'
    }
})
export default PriceText;