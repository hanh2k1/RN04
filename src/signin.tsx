import React  from "react";
import { Alert, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View, onPress } from "react-native";

const LoginScreen = () => {
  return (
  <SafeAreaView style = {styles.root}>
    <View style= {{marginTop:70,}}>
      <Text style= {{ textAlign:'center', color:'red',fontSize:20,fontWeight:'bold'}}>join active ecommare</Text>
    </View>
    <View>
      <Text style={{color:'red',fontSize:15,marginLeft:10,fontWeight:'bold'}}>Menu</Text>
      <TextInput style={styles.input1} placeholder="nhap ho ten"/>   
    </View>
    <View>
      <Text style={{color:'red',fontSize:15,marginLeft:10,fontWeight:'bold'}}>Mail</Text>
      <TextInput style={styles.input1} placeholder="examle@mail.com"/>   
      <Text style={{textAlign:'right',textDecorationLine: 'underline',fontStyle: 'italic',color:'red',fontSize:14,fontWeight:'normal'}}>or register with phone number</Text>
    </View>
    <View>
      <Text style={{color:'red',fontSize:15,marginLeft:10,fontWeight:'bold'}}>Password</Text>
      <TextInput style={styles.input1} placeholder="  *****  "/>   
    </View><View>
      <Text style={{color:'red',fontSize:15,marginLeft:10,fontWeight:'bold'}}>retypePassword</Text>
      <TextInput style={styles.input1} placeholder="  *****  "/>   
    </View>
    <View>

    <TouchableOpacity style={styles.button}>
       <Text>
         LOGIN
       </Text>
     </TouchableOpacity>
     <Text style={{}}>Already have account?</Text>
     <TouchableOpacity style={styles.button2}>
       <Text>
         SIGN UP
       </Text>
     </TouchableOpacity>
    </View>
  </SafeAreaView>
 );

};

const styles = StyleSheet.create ({
  root :{
    flex: 1,
    backgroundColor:'white',
  },
  input1 :{
   
     "borderWidth": 0.7,
     "borderRadius": 15,
     "borderColor": "#807865",
     "borderBottomColor": "gray",
     marginHorizontal:15,
   },
   button:{
     height:50,
     margin:16,
     backgroundColor:'#d64d4d',
     alignItems:'center',
     justifyContent:'center',
     borderRadius:60,
     marginTop:60,
   },
   button2:{
     height:50,
     margin:16,
     backgroundColor:'#db7e21',
     alignItems:'center',
     justifyContent:'center',
     borderRadius:60,
   },

});

export default LoginScreen;

