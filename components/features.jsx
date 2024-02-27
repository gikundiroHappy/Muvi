import React from 'react';
import {View,Text} from 'react-native';


export default function Features({name}) {
  return (
 <View style={{ paddingVertical:3,paddingHorizontal:15 ,}}>
    <Text style={{textAlign:"center",padding:5,fontWeight:700,color:"#D5D7DA",}}>{name}</Text>
 </View>
  );
}
