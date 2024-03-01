import React,{useState,useEffect} from 'react';
import {View,StyleSheet, ScrollView,Image,Dimensions,Text, SafeAreaView,FlatList} from 'react-native';
import { TextInput } from 'react-native-paper';
import Features from '../components/features';
import { featuresData } from '../properties';
import Popularmuvi from '../components/popular.jsx';
import axios from 'axios';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Search({navigation}) {

  const [searchText, setSearchText] = useState('')
  const [data, setData] = useState([])
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWNjY2Y2ZDY4MWI5MDVhZDNlNzA3MTI3Y2UxMzVlYyIsInN1YiI6IjY1ZDg2YzBiY2FhNTA4MDE4YTM0MTM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2TFkovSh1xp8gcoTBYhee8W0E8YrGu-NvAMn6JxBNBo'
    }
  };

  const Getpopular = async ()=>{
    try{
   const response = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${searchText}&include_adult=false&language=en-US&page=1`, options);
   setData(response.data.results)
    }catch(error){
      console.error(error)
    }
  }

  useEffect(() => {
    if(searchText.length > 0){
    Getpopular()
  }else{
    setData([])
  }
  },[searchText]);


  const GetSearch = ()=>{
   setSearchText('')
  }

  return (
 <SafeAreaView style={styles.container}>
    <View style={{backgroundColor:"#26282C" , paddingHorizontal:20 ,paddingVertical:20}}>
    <TextInput label="Search Movie Title" value={searchText} onChangeText={setSearchText}
    style={{backgroundColor:"1F2123",}} underlineColor='#77787C' textColor="white"
    theme={{colors:{primary:"#E0BF36"}}}
    right={<TextInput.Icon size={19} icon="magnify" color="#EED251" onPress={GetSearch}></TextInput.Icon>}
    />
<View style={{paddingVertical:20}}>
<FlatList horizontal showsHorizontalScrollIndicator={false}
        data={featuresData}
        renderItem={({item}) => <Features name={item.name} />}
        keyExtractor={item => item.id.toString()}
      />
</View>

  <ScrollView>   
      {
        data.map((item,index)=>{
          return (
            <View key={index}>
            <Popularmuvi title={item.vote_average} image={item.poster_path} 
            onPress={()=>navigation.navigate('details',  item )}/>
            </View>
          )
        })
      }
      {data.length <= 0 && 
       <View>
       <View style={{display:"flex",flexDirection:"row",justifyContent:"center", paddingTop:30}}>
       <Image source={require('../assets/search.png')}/>
       </View>
       
       <View style={{textAlign:"center"}}>
       <Text style={{textAlign:"center",color:"white",fontWeight:"bold",paddingVertical:20}}>Find your Movie</Text>
       <Text style={{textAlign:"center",color:"#898B8F"}}>Search movie, originals,as you like</Text>
       </View>
       
       <View style={{height:173}}></View>
       </View> 
      }
      
    </ScrollView>
    </View>
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
    width:width,
    height:height,
 
    },
  });
  