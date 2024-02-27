import React from 'react';
import {View,StyleSheet,Image, Pressable,Dimensions} from 'react-native';


const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Home({navigation}) {
  

  return (
 <View style={styles.container}>
  <Pressable onPress={() => navigation.navigate('welcome')}>
   <Image source={require('../assets/home.png')} style={{borderRadius:10}} />
  </Pressable>
 </View>
  );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor:"#1F2123",
    height:height,
    width:width,
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
    },
  });
  