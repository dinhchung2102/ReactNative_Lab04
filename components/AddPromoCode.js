import React from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import DefaultText from "./DefaultText";

const AddPromoCode = () =>{
    return (
        <View style ={styles.container}>
            <TouchableOpacity style = {styles.addCode}>
                <View
                    style = {{
                        width: '20%',
                        height:'60%',
                        backgroundColor:'yellow',
                        marginLeft: 20,
                        marginRight: 20
                    }}
                />
                <DefaultText style={styles.textStyle}>Mã giảm giá</DefaultText>
            </TouchableOpacity>
            <TouchableOpacity style ={styles.applyButton}>
                <Text style ={styles.textApplyButton}>
                    Áp dụng
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        height: 50,
        marginTop: '10%',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textStyle:{
        fontSize: 22
    },
    addCode:{
        justifyContent:'flex-start',
        flexDirection:'row',
        alignItems:'center',
        width: '60%',
        borderColor:'grey',
        borderWidth: 1,
        height:'100%'
    },
    applyButton:{
        backgroundColor:'blue',
        width:'30%',
        alignItems:'center',
        justifyContent:'center'
    },
    textApplyButton:{
        fontSize: 27,
        fontWeight:'bold',
        color:'white'
    }
})
export default AddPromoCode;