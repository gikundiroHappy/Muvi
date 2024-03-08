import React, { useState,useContext }  from 'react';
import {View,StyleSheet,Text,Image,SafeAreaView, TouchableOpacity,Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import StandardTextInput from '../components/StandardTextinput';
import Button from '../components/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FIREBASE_AUTH } from '../FirebaseConfiguration';
import FlashMessage,{ showMessage, } from "react-native-flash-message";
import { ChangeIntoDarkMode } from '../context/themeContext'


const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Register({navigation}) {
  const {darkMode} = useContext(ChangeIntoDarkMode)
  
  const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [verifyPassword,setVerifyPassword] = useState('')
    const [verifyPasswordError,setVerifyPasswordError] = useState('')
    const [toggle,setToggle]=useState(true);
    const [toggles,setToggles]=useState(true);

   
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

    if(verifyPassword.trim() === ''){
      setVerifyPasswordError("Verify password is required")
      valid = false;
    }else if(verifyPassword !== password){
      setVerifyPasswordError("Dont match with password")
      valid = false;
    }else {
      setVerifyPasswordError('')
    }

  
      return valid;
    }

    const handleRegister =async () =>{
      if (validForm()) {

        try{
          const response = await createUserWithEmailAndPassword(FIREBASE_AUTH,email,password)
            console.log(response)
            showMessage({
              message: "you have signed up",
              hideStatusBar:true,
              type: "success",
              icon:"success",
              duration:6000
            });
            
          }catch (error){
            console.error(error)
            showMessage({
              message: error.code.toString(),
              hideStatusBar:true,
              type: "danger",
             duration:3000
            });
            navigation.navigate('login')
          }finally{
          
          }

        // navigation.navigate('login')
        // console.log('Form submitted:', email, password)
    }
    }

  return (
    <SafeAreaView style={[styles.container,{backgroundColor:darkMode?'white':'#26282C'} ]}>
       <FlashMessage position="top" />
    <View style={{paddingHorizontal:20,paddingVertical:10,display:"flex",flexDirection:"row",gap:10,backgroundColor:"black"}}>
    <AntDesign name="arrowleft" color="#FBC101" size={20} onPress={() => navigation.goBack()}/>
    <Text style={{color:"white",fontWeight:"bold",fontSize:16 }}>Register</Text>
    </View>

    <View style={{width:"100%", backgroundColor:"",display:"flex",flexDirection:"row",justifyContent:"center",backgroundColor:"black"}}>
     <Image source={require('../assets/home.png')} />
     </View>

     <View style={{paddingHorizontal:30, paddingVertical:20}}>
        <View style={{paddingBottom:17,backgroundColor:""}}>
        <Text style={{color:"#A7A9AA",fontSize:14,textAlign:"center",fontWeight:500}}>Sign up to discover all our movies and enjoy our features.</Text>
        </View>
        <View>
            <StandardTextInput 
            label="Email Address" 
            icon="email-outline"  
            value={email} 
            onChangeText={setEmail} 
            error={emailError}
            />
            <View style={{height:20}}>{emailError?(<Text style={{color:"red", paddingVertical:4}}>{emailError}</Text>):null}</View>

            <StandardTextInput 
            label="Password" 
            secureTextEntry={toggle} 
            value={password} 
            icon={toggle? "eye-off-outline" : "eye-outline" }
            onPress={()=>setToggle(!toggle)}
            onChangeText={setPassword} 
            error={passwordError}
            />
            <View style={{height:20}}>{passwordError?(<Text style={{color:"red", paddingVertical:2}}>{passwordError}</Text>):null}</View>

            <StandardTextInput 
            label="Confirm Password" 
            secureTextEntry={toggles} 
            value={verifyPassword} 
            icon={toggles? "eye-off-outline" : "eye-outline" }
            onPress={()=>setToggles(!toggles)}
            onChangeText={setVerifyPassword} 
            error={verifyPasswordError}
            />
            <View style={{height:30}}>{verifyPasswordError?(<Text style={{color:"red", paddingVertical:2}}>{verifyPasswordError}</Text>):null}</View>

            <Button title="Sign Up"  onPress={handleRegister}/>

        </View>
        <Text style={{color:darkMode? '#26282C' : 'white',textAlign:"center", paddingVertical:25, fontSize:13}}>By signing up I accept <Text style={{color:"#FBC101"}}>terms of use </Text>and <Text style={{color:"#FBC101"}}>privacy policy </Text> or simply sign up with</Text>
        <View>

        <TouchableOpacity style={{backgroundColor:"black", color: "#FFFFFF",paddingVertical:15,borderRadius:10, display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:10}}>
        <AntDesign name='apple1' color='white' size={15}/>
          <Text style={{color:"white",fontWeight:500,fontSize:15}}>Sign up with Apple</Text>
        </TouchableOpacity>

        <View style={{height:12}}></View>

        <TouchableOpacity style={{backgroundColor:"white",paddingVertical:15,borderRadius:10, display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:10}}>
        <Image source={require('../assets/google.png')} style={{height:16,width:16}} />
          <Text style={{color:"black",fontWeight:500,fontSize:15}}>Sign up with Google</Text>
        </TouchableOpacity>

    <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:10,paddingVertical:20}}>
     <Text style={{textAlign:"center",fontWeight:600,color:"#A7A9AA", }}>Already have an account?</Text> 
     <TouchableOpacity onPress={() => navigation.navigate('login')}>
     <Text style={{color:"#FBC101"}}>Sign In</Text>
     </TouchableOpacity>
     </View>

        </View>
     </View>
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
  