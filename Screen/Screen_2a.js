import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

export default function Screen_2a({navigation}) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [isPasswordVisible, setPasswordVisible] = useState(false)
  //4+12:43
  return (
    <LinearGradient
      colors={['#FBCB00', '#BF9A00']}
      style = {styles.container}
    >
      <View style = {styles.viewHeader}>
        <Text style ={styles.textHeader}>LOGIN</Text>
      </View>
      <View style ={styles.viewInput}>
          <View style ={styles.viewInputName}>
            <Image
              source={require('../assets/avatar_user 1.png')}
              style={styles.userIcon}
            />
            <TextInput
                placeholder='Name'
                style= {styles.inputName}
                value={name}
                onChangeText={setName}
            />
          </View>
          <View style ={styles.viewInputPassword}>
            <Image
                source={require('../assets/lock-icon.png')}
                style= {styles.lockIcon}
            />
            <TextInput
                placeholder='Password'
                style ={styles.inputPassword}
                value={password}
                onChangeText={setPassword}
                secureTextEntry= {!isPasswordVisible}
            />
            <TouchableOpacity 
                style ={styles.eyeIcon}
                onPress={()=> setPasswordVisible(!isPasswordVisible)}
            >
            <Image
                source={require('../assets/eye-icon.png')}
                
            />
            </TouchableOpacity>
            
          </View>
      </View>
      <View style = {styles.viewButton}>
        <TouchableOpacity style ={styles.button}
          onPress={() => {navigation.navigate('Screen_2b')}}
        >
          <Text style ={styles.textButton}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <Text style = {styles.textForgot}>Forgot your password?</Text>
        </TouchableOpacity>
        
      </View>

    </LinearGradient>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#fff',
  },
  //View header: {text: 'Login'}
  viewHeader:{
    flex: 2,
    justifyContent:'flex-end',
  },
  textHeader:{
    fontSize: 40,
    fontFamily: 'Roboto',
    fontWeight: 'bold'
  },
  //view input: {input name, input pass}
  viewInput: {
    flex: 2,
    justifyContent:'flex-start',
    justifyContent: 'space-evenly',
    alignItems:'center'

  },
  viewInputName:{
    flexDirection: 'row',
    borderColor:'white',
    borderWidth: 1,
    height: '25%',
    width: '85%',
    alignItems:'center'
  },
  userIcon:{
    marginLeft: 10,
    height: 40,
    width: 40
  },
  inputName:{
    marginLeft: 10,
    fontSize: 25
  },
  viewInputPassword:{
    flexDirection: 'row',
    borderColor:'white',
    borderWidth: 1,
    height: '25%',
    width: '85%',
    alignItems:'center'
  },
  lockIcon:{
    height: 40,
    width: 40,
    marginLeft: 10
  },
  inputPassword:{
    fontSize:25,
    marginLeft: 10,
    width: '70%'
  },
  eyeIcon:{
    
    height: 40, 
    width: 40,
    justifyContent:'center',
  },
  //ViewButton: {button, forgot password}
  viewButton:{
    flex: 3,
    alignItems:'center'
  },
  button:{
    width: '85%',
    backgroundColor:'black',
    justifyContent:'center',
    alignItems:'center',
    height: '15%'
  },
  textButton:{
    color:'white',
    fontSize: 30,
    fontWeight:'bold'
  },
  textForgot:{
    fontWeight:'bold',
    fontSize: 20,
    marginTop: '10%'
  }
});
