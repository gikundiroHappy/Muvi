import React from 'react';
import {View,Text,ImageBackground,TouchableOpacity } from 'react-native';


export default function Newrelease({title,image,onPress}) {
  return (
 <TouchableOpacity  style={{ borderRadius: 10, overflow: 'hidden',marginRight:10}} onPress={onPress}>
 <ImageBackground source={{uri:`https://image.tmdb.org/t/p/w500${image}` }} style={{ position:"relative",width:250, height:150,}}>
    <View style={{margin:10,borderRadius:5, backgroundColor:"#FBC101",paddingVertical:12,paddingHorizontal:20,display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginLeft:"70%"}}>
    <Text style={{ position:"absolute",textAlign:"center",padding:6,color:"white",fontWeight:600,  color:"black",  }}>{title}</Text>   
    </View>
 </ImageBackground>
 </TouchableOpacity >
  );
}
