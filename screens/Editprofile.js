import React from 'react';
import {View,StyleSheet,Text,Image,SafeAreaView, TouchableOpacity,Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import StandardTextInput from '../components/StandardTextinput';
import Button from '../components/Button';


const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Editprofile({navigation}) {

    const url="https://images.pexels.com/photos/1326946/pexels-photo-1326946.jpeg?auto=compress&cs=tinysrgb&w=600";

  return (
    <SafeAreaView style={styles.container}>
    <View style={{paddingVertical:30,display:"flex",flexDirection:"row",gap:10,paddingHorizontal:20}}>
    <AntDesign name="arrowleft" color="#FBC101" size={20} onPress={() => navigation.navigate('profile')}/>
    <Text style={{color:"white",fontWeight:"bold",fontSize:16 }}>Edit Profile</Text>
    </View>

<View style={{backgroundColor:"#26282C"}}>
    <View style={{display:'flex',flexDirection:"row", paddingVertical:30,justifyContent:"center" }}>
    <View style={{width:80, height:80,borderRadius:10,overflow:"hidden"}}>
    <Image source={{uri : url}} style={{width:"100%",height:"100%"}} />
    </View>
   </View>   

     <View style={{paddingHorizontal:30, paddingBottom:30}}>
        
        <View>
            <StandardTextInput label="Name" icon="account-outline"/>

            <StandardTextInput label="Email" icon="email-outline"/>

            <StandardTextInput label="Phone Number" icon="phone-outline" keyboardType='numeric'/>
            <View style={{height:240}}></View>
            <Button title="Save"/>

        </View>
 
     </View>
</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#202123",
        flex:1,
        width:width,
        height:height
    },
  });
  