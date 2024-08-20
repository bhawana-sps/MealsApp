import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import InputContainer from "./InputContainer";
import Color from "../../util/Color";
import Button from "./Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

function LoginForm(){
    const [enteredEmail, setEnteredEmail] = useState('')
    const [enteredPassword, setEnteredPassword] = useState('')
    const navigation = useNavigation()
    function submitHandler() {
        setEnteredEmail( enteredEmail.trim())
        setEnteredPassword(enteredPassword.trim())
    
        const emailIsValid =  enteredEmail.includes('@') && enteredEmail.includes('.')
        const passwordIsValid = enteredPassword.length > 6
        if( !emailIsValid || !passwordIsValid){
            Alert.alert('Invalid input', 'Please check your entered credentials.')
            return;
          }
          try {
             AsyncStorage.setItem('userEmail', enteredEmail);
            console.log('Email stored successfully:', enteredEmail);
            navigation.replace("DrawerNavigation")
            
        } catch (error) {
            console.error('Failed to store the email:', error);
        }
        console.log("Login")
    }
    function updateInputValueHandler(inputType, enteredValue) {
        switch (inputType) {
          case 'email':
            setEnteredEmail(enteredValue)
            break;
        
          case 'password':
            setEnteredPassword(enteredValue)
            break;
         
        }
      }
    return(
        <View style={styles.rootView}>
        <View style={styles.form}>
          <InputContainer
            label="Email Address"
            placeHolder="Enter Email Address"
            onUpdateValue={updateInputValueHandler.bind(this, 'email')}
            value={enteredEmail}
            keyboardType="email-address"
          
          />
        
          
          <InputContainer
            label="Password"
            placeHolder="Enter Password"
            onUpdateValue={updateInputValueHandler.bind(this, 'password')}
            secure
            value={enteredPassword}
          
          />
       
          <View style={styles.buttons}>
            <Button onPress={submitHandler}>
             Log In
            </Button>
          </View>
        </View>
      </View>
    )
    
}
export default LoginForm
const styles = StyleSheet.create({
    buttons: {
      marginVertical: 30,
    },
    rootView:{
     flex:1,
    justifyContent:"center"
    },
    form: {
        marginHorizontal: 32,
        padding: 16,
        borderRadius: 8,
        backgroundColor: Color.color_351401,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.35,
        shadowRadius: 4,
        
      }
  });