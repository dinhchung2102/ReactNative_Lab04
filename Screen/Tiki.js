import React, { useState } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet, TextInput } from "react-native";
import DefaultText from "../components/DefaultText";
import PriceText from "../components/PriceText";
import LinkText from "../components/LinkText";
import PMButton from "../components/PMButton";
import AddPromoCode from "../components/AddPromoCode";
//6h25
const Tiki = ({navigation}) =>{
    const [count, setCount] = useState('')
    const hanldeData = (value) =>{
        setCount(value)
    }
    return(
        <View style = {styles.container}>
          <View style = {styles.header}>
            <View style = {styles.prodetail}>
                    <Image
                        source={require('../assets/book.png')}
                        style ={styles.imageProduct}
                    />
                <View style ={styles.infoProduct}>
                    <DefaultText>Nguyên hàm tích phân và ứng dụng</DefaultText>
                    <DefaultText>Cung cấp bởi Tiki Trading</DefaultText>
                    <PriceText>141.800 d</PriceText>
                    <DefaultText style={styles.discountText}>141.000</DefaultText>
                    <View style = {styles.addProduct}>
                        <PMButton/>
                        <TouchableOpacity>
                            <LinkText>Mua sau</LinkText>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style = {styles.discountContainer}>
                <View style ={{
                    flexDirection:'row', 
                    justifyContent:'space-between', 
                    width: '69%', 
                    marginTop: '5%'}}>
                  <DefaultText>Mã giảm giá đã lưu</DefaultText>
                  <LinkText>Xem tại đây</LinkText>
                </View>
                <AddPromoCode/>
            </View>
          </View>
          <View style ={styles.content}>
            <View style ={{
                width:'100%',
                height: '15%',
                backgroundColor:'white',
                marginTop: '5%',
                flexDirection:'row',
                justifyContent:'flex-start',
                alignItems:'center'
            }}>
              <DefaultText
                style={{
                    marginLeft: '5%'
                }}
              >Bạn có phiếu quà tặng Tiki/Got it/ Urbox? </DefaultText>
              <LinkText>Nhập tại đây?</LinkText>
            </View>
            <View style ={{
                flexDirection:'row',
                marginTop: '5%',
                backgroundColor:'white',
                height:'15%',
                alignItems:'center',
                justifyContent:'space-between'
            }}>
                <DefaultText style={{
                    fontSize: 25,
                    marginLeft:'5%'
                }}>Tam tinh</DefaultText>
                <PriceText
                    style={{
                        marginRight: '5%'
                    }}
                >141.800 d</PriceText>
            </View>
            
          </View>
          <View style ={styles.footer}>
            <View
                style ={{
                    flexDirection:'row',
                    alignItems:'center',
                    justifyContent:'space-between',
                    marginTop: '5%'
                }}
            >
                <Text
                    style ={{
                        fontSize: 22,
                        color:'grey',
                        marginLeft:'5%'
                    }}
                >Thành tiền</Text>
                <PriceText
                    style={{
                        marginRight: '5%'
                    }}
                >141.800d</PriceText>
            </View>
            <View style ={{
                marginTop: '10%',
                alignItems:'center'
            }}>
            <TouchableOpacity
                style ={{
                    backgroundColor:'red',
                    width: '90%',
                    height: '60%',
                    justifyContent:'center',
                    alignItems:'center'
                }}
            >
                <Text style= {{
                    fontSize: 30,
                    fontWeight: 'bold',
                    color:'white'
                }}>TIẾN HÀNH ĐẶT HÀNG</Text>
            </TouchableOpacity>
            </View>
            
          </View>
        </View> 
        
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'white',
        alignItems:'center'
    },
    //=============
    header:{
        flex: 3,
        backgroundColor :"white",
        width: '90%',
        marginTop: '10%',
    },
    imageProduct:{
        width:'40%',
        height: 200
    },
    prodetail:{
        flexDirection:'row'
    },
    infoProduct:{
        marginLeft: 15,
        justifyContent:'space-between'
    },
    discountText:{
        textDecorationLine: 'line-through'
    },
    addProduct:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    //===========
    content:{
        flex: 3,
        backgroundColor:'grey',
        justifyContent:'flex-start',
        width: '100%'
    },
    //==============
    footer:{
        flex: 1.5,
        //backgroundColor: 'blue',
        width:'100%',
    }
})
export default Tiki;