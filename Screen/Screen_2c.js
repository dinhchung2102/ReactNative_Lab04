import React, { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
 } from "react-native";
import {CheckBox} from 'react-native-elements';

const Screen_2c = ({navigation}) =>{
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setPasswordVisible] = useState(false)
    const [length, setLength] = useState('')
    const [isCheckLower, setCheckLower] = useState(false)
    const [isCheckUpcase, setCheckUpcase] = useState(false)
    const handleChange = (Text) =>{
        setPassword(Text);
        setLength(Text.length.toString());
        checkLowUp(Text)
    }
    const checkLowUp = (Text) =>{
        if(/[a-z]/.test(Text)) 
            setCheckLower(true)
        else
            setCheckLower(false)
    }
    const checkUpcase = (Text) =>{
        if(/[A-Z]/.test(Text))
            setCheck
    }
    return(
        <LinearGradient 
            colors={['#3B3B98', '#C4C4C4']}
            style ={styles.container}
        >
        <View style = {styles.containerv2}>
            <View style ={styles.header}>
            <Text style ={styles.headerText}>PASSWORD</Text>
            <Text style = {styles.headerText}>GENERATOR</Text>
            <TextInput
                value={password}
                onChangeText={handleChange}
                secureTextEntry = {(!isPasswordVisible)}
                style = {styles.headerInput}
            />
            </View>
        <View style ={styles.contentContainer}>
            <View style ={styles.passwordContainer}>
                <Text style ={styles.formText}>Password length</Text>
                <TextInput
                    style ={styles.passwordInput}
                    editable  = {false}
                    value={length}
                />
            </View>
            <View style = {styles.form} >
                <Text style = {styles.formText}>
                    Include lower case letters
                </Text>
                <CheckBox
                    checked = {isCheckLower}
                    containerStyle = {styles.checkboxContainer}
                    style ={styles.checkboxStyle}
                    checkedColor="red"
                    uncheckedColor="white"
                    backgroundColor = 'white'
                />
            </View>
            <View style = {styles.form} >
                <Text style = {styles.formText}>
                    Include upcase letters
                </Text>
                <CheckBox
                    checked = {isCheckLower}
                    containerStyle = {styles.checkboxContainer}
                    style ={styles.checkboxStyle}
                    checkedColor="red"
                    uncheckedColor="white"
                    backgroundColor = 'white'
                />
            </View>
            <View style = {styles.form} >
                <Text style = {styles.formText}>
                    Include number
                </Text>
                <CheckBox
                    checked = {isCheckLower}
                    containerStyle = {styles.checkboxContainer}
                    style ={styles.checkboxStyle}
                    checkedColor="red"
                    uncheckedColor="white"
                    backgroundColor = 'white'
                />
            </View>
            <View style = {styles.form} >
                <Text style = {styles.formText}>
                    Include special symbol
                </Text>
                <CheckBox
                    checked = {isCheckLower}
                    containerStyle = {styles.checkboxContainer}
                    style ={styles.checkboxStyle}
                    checkedColor="red"
                    uncheckedColor="white"
                    backgroundColor = 'white'
                />
            </View>
        </View>

        <View style ={styles.footer}>
            <TouchableOpacity style ={styles.button}>
                <Text style = {styles.buttonText}>
                    GENERATE PASSWORD
                </Text>
            </TouchableOpacity>
        </View>
        </View>
        
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerv2:{
       backgroundColor: '#23235B',
       width: '90%',
       height: '80%',
       borderRadius: 20,
       alignItems: 'center'
    },
    header:{
        width: '90%',
        paddingTop: '20%',
        alignItems:'center',
        paddingTop: '20%',
    },
    headerText:{
        fontSize: 45,
        fontWeight:'bold',
        color:'white'
    },
    headerInput:{
        backgroundColor:'black',
        width: '100%',
        height:'20%',
        marginTop: '10%',
        color: 'white',
        fontSize: 20
    },
    contentContainer:{
        flex: 1,
    },
    passwordContainer:{
        width:'90%',
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 20,
    },
    passwordInput:{
        backgroundColor: 'white',
        width: '40%',
        height:40,
        color: 'black',
        textAlign:'center',
        fontSize:25
    },
    form:{
        marginTop: 16,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    formText:{
        color:'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    footer:{
        justifyContent: 'center',
        alignItems: 'center',
        width:'90%',
        marginBottom: '0%'
    },
    button: {
        backgroundColor : '#3B3B98',
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        height: 50
    },
    buttonText:{
        color:'white',
        fontWeight:'bold',
        fontSize: 20
    },
    checkboxContainer:{
        backgroundColor: 'transparent'
    },
    checkboxStyle:{
    
    }
})

export default Screen_2c;