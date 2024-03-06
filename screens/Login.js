import React, { useState } from 'react';
import {View,StyleSheet,Text,Image,SafeAreaView, TouchableOpacity, ScrollView,Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import StandardTextInput from '../components/StandardTextinput';
import Button from '../components/Button';
import { useNavigation } from '@react-navigation/native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../FirebaseConfiguration';
import FlashMessage,{ showMessage} from "react-native-flash-message";


const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Login() {
    const navigation = useNavigation();

    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

   
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(email)
  }

    const validForm = () =>{
     let valid = true;

      if(email.trim() === ''){
        setEmailError("Email is required")
        valid = false;
      }else if(!isValidEmail(email)){
        setEmailError("Your email is not valid")
        valid = false;
      }else {
        setEmailError('')
      }

      if (password.trim() === '') {
        setPasswordError('Password is required')
        valid = false
    } else {
        setPasswordError('')
    }
      return valid;
    }

    const handleLogin = async () =>{
      if (validForm()) {
       
        
      //   const data ={
      //     email:email,
      //     password:password
      //   }

      //  await AsyncStorage.setItem('user_data',JSON.stringify(data))
try{
const response = await signInWithEmailAndPassword(FIREBASE_AUTH,email,password)
  console.log(response)
  showMessage({
    message: "you are logged in",
    hideStatusBar:true,
    type: "success",
    icon:"success",
    duration:6000
  });
  navigation.navigate('landing')
}catch(error){
  showMessage({
    message: error.code.toString(),
    hideStatusBar:true,
    type: "danger",
    icon:"danger",
   duration:3000
  });
}finally{
 setEmail('')
 setPassword('')
}

    }
    }

  return (
    <SafeAreaView style={styles.container}>
      <FlashMessage position="top" />
      <ScrollView>
    <View style={{paddingHorizontal:20,paddingVertical:20,display:"flex",flexDirection:"row",gap:10}}>
    <AntDesign name="arrowleft" color="#FBC101" size={20} onPress={() => navigation.goBack()}/>
    <Text style={{color:"white",fontWeight:"bold",fontSize:16 }}>Login</Text>
    </View>

    <View style={{width:"100%", backgroundColor:"",display:"flex",flexDirection:"row",justifyContent:"center"}}>
     <Image source={require('../assets/home.png')}/>
     </View>

     <View style={{paddingHorizontal:30, paddingVertical:20}}>
        <View style={{paddingBottom:30,backgroundColor:""}}>
        <Text style={{color:"#A7A9AA",fontSize:16,textAlign:"center",fontWeight:500}}>Please Login to enjoy more benefits and we won't let you go</Text>
        </View>
        <View>
            <StandardTextInput label="Email Address" icon="email-outline" value={email} 
            onChangeText={setEmail} error={emailError}/>
            <View style={{height:30}}>{emailError?(<Text style={{color:"red", paddingVertical:4}}>{emailError}</Text>):null}</View>

            <StandardTextInput label="Password" icon="lock-outline" secureTextEntry value={password} 
            onChangeText={setPassword} error={passwordError}/>
             <View style={{height:30}}>{passwordError?(<Text style={{color:"red", paddingVertical:2}}>{passwordError}</Text>):null}</View>

           <View style={{display:"flex",flexDirection:"row",justifyContent:"flex-end"}}>
            <Text style={{paddingVertical:20,color:"#FBC101",fontWeight:500}}>Forgot Password?</Text>
            </View>

            <Button title="Get started" onPress={handleLogin} />
        </View>
        <Text style={{color:"white",textAlign:"center", paddingVertical:25, fontSize:13}}>Or simply login with</Text>
        <View>

        <TouchableOpacity style={{backgroundColor:"black", color: "#FFFFFF",paddingVertical:15,borderRadius:10, display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:10}}>
        <AntDesign name='apple1' color='white' size={15}/>
          <Text style={{color:"white",fontWeight:500,fontSize:15}}>Login with Apple</Text>
        </TouchableOpacity>

        <View style={{height:12}}></View>

        <TouchableOpacity style={{backgroundColor:"white",paddingVertical:15,borderRadius:10, display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:10}}>
        <Image source={require('../assets/google.png')} style={{height:16,width:16}} />
          <Text style={{color:"black",fontWeight:500,fontSize:15}}>Login with Google</Text>
        </TouchableOpacity>

      <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:10,paddingVertical:20}}>
     <Text style={{textAlign:"center",fontWeight:600,color:"#A7A9AA", }}>Don't have an account?</Text> 
     <TouchableOpacity onPress={() => navigation.navigate('register')}>
     <Text style={{color:"#FBC101"}}>Sign Up</Text>
     </TouchableOpacity>
     </View>

        </View>
     </View>
     </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#26282C",
        flex:1,
        width:width,
        height:height
    },
  });
  