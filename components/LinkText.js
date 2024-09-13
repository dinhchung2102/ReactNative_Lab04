import React from "react";
import { StyleSheet, Text } from "react-native";

const LinkText = ({children, style}) =>{
    return <Text style = {[styles.linkText, style]}>{children}</Text>
}

const styles = StyleSheet.create({
    linkText :{
        fontSize: 14,
        fontWeight:'bold',
        color:'blue'
    }
});
export default LinkText;