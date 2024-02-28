import React from 'react';
import {View,StyleSheet,Image, Pressable,Dimensions,Text, SafeAreaView,FlatList} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Profilecontent from '../components/profile.jsx';
import { profileData } from '../properties';


const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Profile({navigation}) {
    const url="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (

 <SafeAreaView style={styles.container}>
 <Text style={{color:"white", fontWeight:"bold", paddingBottom:10, fontSize:19, padding:30 }}>More</Text>
 <View style={{display:'flex',flexDirection:"row",gap:10, paddingVertical:10,alignItems:"center",justifyContent:"space-evenly" }}>
    <View style={{width:80, height:80,borderRadius:10,overflow:"hidden"}}>
    <Image source={{uri : url}} style={{width:"100%",height:"100%"}} />
    </View>
    <View >
        <Text style={{color:"white", fontWeight:"bold", paddingBottom:10}}>Jonathan Doe</Text>
        <Text style={{color:"white",paddingBottom:10,fontWeight:500,color:"#9A9CA0"}}>doe.jonathan@gmail.com</Text>
    </View>
    <View style={{display:"flex",flexDirection:"row",gap:7}}>
        <Feather name='edit-2' size={15} color="#C4A22F"/>
        <Text style={{color:"#C4A22F"}}>Edit</Text>
    </View>
 </View>

 <View style={{backgroundColor:"#25272A" ,paddingHorizontal:30, paddingBottom:20}}>
 <FlatList  showsVerticalScrollIndicator={false}
        data={profileData}
        renderItem={({item}) => <Profilecontent name={item.name} icon={item.icon}/>}
        keyExtractor={item => item.id.toString()}
        
      />
      <Text style={{color:"#656565",paddingBottom:10, paddingVertical:40}}>Terms & Condition</Text>
      <Text style={{color:"#656565"}}>Privacy & Policy</Text>
      <View style={{height:120}}></View>
      <Pressable onPress={()=>navigation.navigate('home')}
      style={{borderWidth:1, width:"100%", borderColor:"#3B3E3F",borderRadius:5,paddingVertical:10}}><Text style={{color:"#B76C5B",textAlign:"center"}}> Log Out</Text></Pressable>
</View>

 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor:"#1F2123",
    height:height,
    width:width,
    
    },
  });
  