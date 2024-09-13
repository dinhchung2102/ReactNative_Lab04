import React from "react";
import { StyleSheet, Text, View } from "react-native";

const DefaultText = ({children, style}) =>{
    return (
        <Text style = {[styles.defaultStyle, style]}>{children}</Text>
    )
};

const styles = StyleSheet.create({
    defaultStyle:{
        color: 'black',
        fontSize: 14,
        fontWeight:'bold',
    }
});
export default DefaultText;