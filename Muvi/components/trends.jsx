import React from 'react';
import {View,Text} from 'react-native';


export default function Trends({name}) {
  return (
 <View style={{borderWidth:1,borderColor:"#838383",  borderRadius:10, paddingVertical:3,paddingHorizontal:15 }}>
    <Text style={{textAlign:"center",padding:5,fontWeight:600,color:"#D5D7DA"}}>{name}</Text>
 </View>
  );
}
