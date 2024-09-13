import React from "react";
import { View, Text, StyleSheet,Image, TouchableOpacity, TextInput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//2h14
export default function Screen_2b({navigation}) {
    return(
        <LinearGradient
          colors={['#ffffff', '#ffffff']}
          style = {styles.container}
        >
          <View style ={styles.viewProduction}>
            <Image
              source={require('../assets/usb.png')}
              style = {styles.imageProduction}
            />
            <Text style ={styles.textPro}>
              USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa bluetooth
            </Text>
          </View>
          <View style ={styles.viewReaction}>
            <Text style={styles.textReact}>Cực kỳ hài lòng</Text>
            <View style = {{flexDirection:'row'}}>
              <Image source={require('../assets/star.png')}/>
              <Image source={require('../assets/star.png')}/>
              <Image source={require('../assets/star.png')}/>
              <Image source={require('../assets/star.png')}/>
              <Image source={require('../assets/star.png')}/>
            </View>
          </View>
          <View style = {styles.viewAddImage}>
            <TouchableOpacity style ={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
              <Image
                source={require('../assets/camera.png')}
                style ={styles.cameraIcon}
              />
              <Text style ={styles.textAddImage}>Thêm hình ảnh</Text>
            </TouchableOpacity>
          </View>
          <View style ={styles.viewTextInput}>
            <TextInput style ={styles.textInput}
              placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
              textAlignVertical="top"
              multiline = {true}
            />
          </View>
          <View style ={styles.viewButton}>
            <TouchableOpacity style ={styles.button}
            onPress={() => {navigation.navigate('Screen_2c')}}>
                <Text style ={styles.textButton}>Gửi</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
    )
}
const styles =StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    viewProduction:{
        flex: 1,
        flexDirection:'row',
        width:'85%',
        justifyContent:'center',
        paddingTop: '30%',
    },
    imageProduction:{
    },
    textPro:{
        fontSize: 18,
        fontWeight: 'bold',
        width: '80%'
    },
    //-------{Text: "Cực kỳ hài lòng" & 5 star}
    viewReaction:{
        flex: 1,
        justifyContent:'center',
        width:'85%',
        alignItems:'center'
    },
    textReact:{
        fontSize: 18,
        fontWeight:'bold',
        textAlign:'center',
        marginBottom: 20
    },
    //------View Add Image----
    viewAddImage:{
        flex: 0.5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        width:'85%',
        borderWidth: 1,
        borderRadius: 5,
        borderColor:'blue'
    },
    cameraIcon:{

    },
    textAddImage:{
        fontSize: 20,
        fontWeight:'bold',
        marginLeft: 10
    },
    //-----------{TextInput, Text}-------
    viewTextInput:{
        flex: 2,
        width:'85%',
        marginTop: '5%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor:'#C4C4C4',
        alignItems:'center'
    },
    textInput:{
        fontSize:18,
        flex: 1,
        width:'95%'
    },
    //view button : {button, text}
    viewButton:{
        width: '85%',
        alignItems:'center',
        flex: 1,
        marginTop: '10%'
    },
    button:{
        borderWidth: 1,
        width: '100%',
        backgroundColor: '#0D5DB6',
        alignItems:'center',
        justifyContent:'center',
        height: '30%',
        borderRadius:5
    },
    textButton:{
        fontSize: 20,
        fontWeight: 'bold',
        color:'white'
    }

    

})