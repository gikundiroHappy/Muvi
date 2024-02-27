import React from 'react';
import {View,StyleSheet,Text,ImageBackground, Dimensions} from 'react-native';
import Button from '../components/Button';


const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Welcome({navigation}) {
  

  return (
 <View style={styles.container}>

<ImageBackground source={require('../assets/joker.png')}  style={{ height:"100%"}}>
    <View style={{backgroundColor:"rgba(000,000,000,0.6)", height:"100%",paddingHorizontal:40}}>
        <View style={{backgroundColor:"",height:340}}></View>
        <View style={{ height:"100%",display:"flex",}}>
        <Text style={{color:"white", fontWeight:"bold",fontSize:23, width:250}}>Enjoy your favorite movie every where</Text>
        <Text style={{color:"white", paddingTop:20,fontSize:14,fontWeight:500}}>Browse through our collection and  discover hundreds of movies and series that you'll love!</Text>
        <View style={{backgroundColor:"#FDD130", width:30,height:3, marginTop:20,borderRadius:10}}></View>
        <View style={{height:190}}></View>
 <Button title="Get Started" onPress={() => navigation.navigate('play')} />

        </View>

</View>
    </ImageBackground>
</View>

  );
}

const styles = StyleSheet.create({
    container: {
    display:"flex",
    height:height,
    width:width
    },
    button: {
        backgroundColor: "#F3B918",
        padding: 10,
        alignItems: "center",
        marginTop: 190,
        borderRadius:8
    },
  });
  