import React,{ useContext, useState } from 'react';
import {View,StyleSheet,Image, Pressable,Dimensions,Text, SafeAreaView,FlatList, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Profilecontent from '../components/profile.jsx';
import { ChangeIntoDarkMode } from '../context/themeContext.jsx';
import { profileData } from '../properties';
import { FIREBASE_AUTH } from '../FirebaseConfiguration.js';


const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Profile({navigation}) {
    const url="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=600";

    const Logout = async()=>{
      FIREBASE_AUTH.signOut()
      navigation.navigate('login')
    }

     const [darkToggle,setDarkToggle] = useState(false)
    const {darkMode,HandleMode} = useContext(ChangeIntoDarkMode)

  return (

 <SafeAreaView style={[styles.container,{backgroundColor:darkMode?'white':'#202123'} ]}>
  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
 <TouchableOpacity style={{ padding: 30 }} onPress={() => navigation.openDrawer()}>
  <Text style={{ color:darkMode?'black':'white', fontWeight: "bold", paddingBottom: 10, fontSize: 19 }}>More</Text>
</TouchableOpacity>
<TouchableOpacity style={{ padding: 30 }} onPress={()=>{
  HandleMode()
  setDarkToggle(!darkToggle)
  }}>
<Feather name={darkToggle?'star':'moon'} size={15} color={darkMode?'black':'white'}/>
</TouchableOpacity>
</View>

 <View style={{display:'flex',flexDirection:"row",gap:10, paddingVertical:10,alignItems:"center",justifyContent:"space-evenly" }}>
    <View style={{width:80, height:80,borderRadius:10,overflow:"hidden"}}>
    <Image source={{uri : url}} style={{width:"100%",height:"100%"}} />
    </View>
    <View >
        <Text style={{color:darkMode?'black':'white', fontWeight:"bold", paddingBottom:10}}>Jonathan Doe</Text>
        <Text style={{color:"white",paddingBottom:10,fontWeight:500,color:"#9A9CA0",}}>doe.jonathan@gmail.com</Text>
    </View>
    <TouchableOpacity
    onPress={()=>navigation.navigate('editprofile')}
    style={{display:"flex",flexDirection:"row",gap:7}}>
        <Feather name='edit-2' size={15} color="#C4A22F"/>
        <Text style={{color:"#C4A22F"}}>Edit</Text>
    </TouchableOpacity>
 </View>

 <View style={{backgroundColor:darkMode?'rgba(000,000,000,0.1)':'#25272A' ,paddingHorizontal:30, paddingBottom:20}}>
 <FlatList  showsVerticalScrollIndicator={false}
        data={profileData}
        renderItem={({item}) => <Profilecontent name={item.name} icon={item.icon}/>}
        keyExtractor={item => item.id.toString()}
        
      />
      <Text style={{color:"#656565",paddingBottom:10, paddingVertical:40}}>Terms & Condition</Text>
      <Text style={{color:"#656565"}}>Privacy & Policy</Text>
      <View style={{height:120}}></View>
      <Pressable onPress={Logout}
      style={{borderWidth:1, width:"100%", borderColor:"#3B3E3F",borderRadius:5,paddingVertical:10}}><Text style={{color:"#B76C5B",textAlign:"center"}}> Log Out</Text>
      </Pressable>
</View>

 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
    height:height,
    width:width,
    
    },
  });
  