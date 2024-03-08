import React from 'react';
import {View,StyleSheet,Image,Text,TouchableOpacity,SafeAreaView,Dimensions} from 'react-native';
import Button from '../components/Button';
import { useContext } from 'react'
import { ChangeIntoDarkMode } from '../context/themeContext'


const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Play({navigation}) {
  const {darkMode} = useContext(ChangeIntoDarkMode)

  return (
 <SafeAreaView style={[styles.container,{backgroundColor:darkMode?'white':'#26282C'} ]}>
 <View >
  <View style={{width:"100%", backgroundColor:"#1F2123" ,display:"flex",flexDirection:"row",justifyContent:"center"}}>
  <Image source={require('../assets/home.png')}/>
  </View>
  <View style={{paddingHorizontal:20}}>
  <View style={{height:90}}></View>
  <View style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
  <Image source={require('../assets/welcome.jpeg')} style={{width:250,height:150}}  />
  </View>
  <View style={{backgroundColor:"", paddingHorizontal:60,marginTop:20}}>
    <Text style={{textAlign:"center", color: darkMode?'black':'#F9FBFF', fontWeight:"bold",fontSize:18,paddingTop:60}}>Welcome to Muvi</Text>
    <Text style={{textAlign:"center",color:"#6F7074",marginTop:10, fontSize:15}}>Free movie streaming all your needs everytime and everywhere</Text>
  </View>
  <View style={{height:135}}></View>

<Button title="Watch Movie" onPress={() => navigation.navigate('landing')} />
<TouchableOpacity style={{
        padding: 10, alignItems: "center", padding: 25,}} onPress={() =>
          navigation.navigate('login')
        }>
    <Text style={{color:darkMode?'black':'#F9FBFF'}}>Sign In</Text>
</TouchableOpacity>
</View>
 </View>
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
    flex:1,
    width:width,
    height:height
    },
  });
  