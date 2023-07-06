import React  from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const LoginScreen = () => {
  return (
  <SafeAreaView style = {styles.root}>
    <View style={styles.container }>
      <Text style ={styles.text} > LOGIN </Text>
      <View style = { styles.divider}/>
      <Text style ={styles.text1} > DANG NHAP </Text>
      <Text style ={styles.text2} > dung so dien thoai de dang nhap hoac dang ki tai khoan</Text>
      <TextInput style = {styles.textInput} placeholder="nhap so dien thoai cua ban "  />
      <View style={styles.fakeView}/>
      <TouchableOpacity style={styles.button}>
        <Text>
          LOGIN
        </Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
 );

};

const styles = StyleSheet.create ({
  root :{
    flex: 1,
  },
  container:{
    flex: 1, 
    backgroundColor:'white',
  },
  text :{
    color : 'gray',
    fontSize: 20,
    fontWeight:'700',
    margin : 8,

  },
  divider :{
    width:'100',
    height:1,
    backgroundColor:'gray',
  },
  text1 :{
    marginTop: 25,
    color : 'gray',
    fontSize: 20,
    fontWeight:'700',
    margin : 8,

  },
  text2 :{
    color : 'gray',
    fontSize: 15,
    fontWeight:'700',
    marginHorizontal : 16,
  },
  textInput:{
      height:50,
      marginHorizontal: 16,
      borderBottomColor:'gray',
      borderBottomWidth: 0.5,

  },
    fakeView:{
      flex:1,
    },

  button:{
    height:50,
    margin:16,
    backgroundColor:'#e6eded',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:60,
  },

});

export default LoginScreen;