import React from 'react';
import {View,Text} from 'react-native';
import { useContext } from 'react'
import { ChangeIntoDarkMode } from '../context/themeContext'

export default function Features({name}) {
  const {darkMode} = useContext(ChangeIntoDarkMode)
  return (
 <View style={{ paddingVertical:3,paddingHorizontal:15 ,}}>
    <Text style={{textAlign:"center",padding:5,fontWeight:700,color:darkMode?'black':'#D5D7DA',}}>{name}</Text>
 </View>
  );
}
