import React from 'react';
import {View,Image,Text, TouchableOpacity} from 'react-native';


export default function Mylistcard({title,image,year, category, onPress}) {
  return (
 <TouchableOpacity style={{display:'flex',flexDirection:"row",gap:10, paddingVertical:10,paddingHorizontal:20 }} onPress={onPress}>
    <View style={{width:200, height:120}}>
    <Image source={{uri : `https://image.tmdb.org/t/p/w500${image}`}} style={{width:"100%", height:"100%"}}/>
    </View>
    <View style={{width:"45%"}}>
        <Text style={{color:"white", fontWeight:"bold", paddingBottom:10}}>{title}</Text>
        <Text style={{color:"white",paddingBottom:10,fontWeight:500,color:"#9A9CA0"}}>{year}</Text>
        <Text style={{color:"white",paddingBottom:10,fontWeight:500,color:"#606165"}}>{category}</Text>
    </View>
 </TouchableOpacity >
  );
}
