
import React, { Component } from 'react'
import {
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput
} from 'react-native'

const AuthScreen = () => {
  return (
   
    
    <View style={styles.verificationView}>
    
    <View style={styles.textInputRow} > 
    <TextInput
      style={styles.textInput}
      placeholder='Verification code'
      placeholderTextColor='#eee'
      keyboardType='numeric'
      maxLength={1}
      
    />
     
     <TextInput
      style={styles.textInput}
      placeholder='Verification code'
      placeholderTextColor='#eee'
      keyboardType='numeric'
      maxLength={1}
      
    /> 
     <TextInput
      style={styles.textInput}
      placeholder='Verification code'
      placeholderTextColor='#eee'
      keyboardType='numeric'
      maxLength={1}
      
    />

<TextInput
      style={styles.textInput}
      placeholder='Verification code'
      placeholderTextColor='#eee'
      keyboardType='numeric'
      maxLength={1}
      
    />

<TextInput
      style={styles.textInput}
      placeholder='Verification code'
      placeholderTextColor='#eee'
      keyboardType='numeric'
      maxLength={1}
      
    />

<TextInput
      style={styles.textInput}
      placeholder='Verification code'
      placeholderTextColor='#eee'
      keyboardType='numeric'
      maxLength={1}
      
    />

</View>

    <TouchableOpacity
      style={[styles.themeButton, { marginTop: 20 }]}
    //   onPress={this.handleVerifyCode}
    >
      <Text style={styles.themeButtonTitle}>התחברות</Text>
    </TouchableOpacity>
    


  </View>
  )
}
export default AuthScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#aaa'
    },
    page: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#2798D5'

    },
    textInput: {
      marginTop: 20,
      height: 40,
      borderColor: '#555',
      borderWidth: 2,
      borderRadius: 5,
      paddingLeft: 10,
      color: '#fff',
      width: '10%',
      fontSize: 11
      
    },
    textInputRow:{
        display:'flex',
        width:'100%',
        justifyContent:"space-evenly",
        flexDirection:'row',
        height:100

      
    },
    themeButton: {
      width: '90%',
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#3A8844',
      borderColor: '#555',
      borderWidth: 2,
      borderRadius: 5
    },
    themeButtonTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff'
    },
    verificationView: {
        width: '100%',
        alignItems: 'center',
        marginTop: 50,
        


    }
})