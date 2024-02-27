import React,{useEffect, useState} from 'react';
import {View,StyleSheet, ScrollView,Image,Dimensions,Text, SafeAreaView,FlatList} from 'react-native';
import { TextInput } from 'react-native-paper';
import Features from '../components/features';
import { featuresData } from '../properties';
import Navigation from '../components/navigation';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Search() {

  const [moviesList,setMoviesList] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  return (
 <SafeAreaView style={styles.container}>
    <View style={{backgroundColor:"#26282C" , paddingHorizontal:20 ,paddingVertical:20}}>
    <TextInput label="Search Movie Title"
    style={{backgroundColor:"1F2123",}} underlineColor='#77787C' textColor="white"
    theme={{colors:{primary:"#E0BF36"}}}
    right={<TextInput.Icon size={19} icon="magnify" color="#EED251" ></TextInput.Icon>}
    />
<View style={{paddingVertical:20}}>
<FlatList horizontal showsHorizontalScrollIndicator={false}
        data={featuresData}
        renderItem={({item}) => <Features name={item.name} />}
        keyExtractor={item => item.id.toString()}
      />
</View>

<View style={{display:"flex",flexDirection:"row",justifyContent:"center", paddingTop:30}}>
<Image source={require('../assets/search.png')}/>
</View>

<View style={{textAlign:"center"}}>
<Text style={{textAlign:"center",color:"white",fontWeight:"bold",paddingVertical:20}}>Find your Movie</Text>
<Text style={{textAlign:"center",color:"#898B8F"}}>Search movie, originals,as you like</Text>
</View>
<View style={{height:162}}></View>

    </View>
    <Navigation/>

  <ScrollView>
  {isLoading?  (<Text></Text>):(<Text></Text>)}
      
    </ScrollView>
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
    backgroundColor:"red",
    width:width,
    height:height,
 
    },
  });
  