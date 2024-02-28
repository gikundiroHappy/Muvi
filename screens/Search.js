import React,{useState,useEffect} from 'react';
import {View,StyleSheet, ScrollView,Image,Dimensions,Text, SafeAreaView,FlatList} from 'react-native';
import { TextInput } from 'react-native-paper';
import Features from '../components/features';
import { featuresData } from '../properties';
import Popularmuvi from '../components/popular.jsx';


const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Search() {

  const [isLoading, setIsLoading] = useState(false)
  const [popularMovies, setPopularMovies] = useState([])
  
  useEffect(() => {
    Getpopular()
  },[]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWNjY2Y2ZDY4MWI5MDVhZDNlNzA3MTI3Y2UxMzVlYyIsInN1YiI6IjY1ZDg2YzBiY2FhNTA4MDE4YTM0MTM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2TFkovSh1xp8gcoTBYhee8W0E8YrGu-NvAMn6JxBNBo'
    }
  };

  const Getpopular = ()=>{
    setIsLoading(true)
    fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options).
  then((response)=>response.json()).then((response)=>{
    setIsLoading(false)
    setPopularMovies(response.results)
  }).catch((err)=>console.error(err))
  }

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

  <ScrollView>
  {isLoading?  (
     <View>
<View style={{display:"flex",flexDirection:"row",justifyContent:"center", paddingTop:30}}>
<Image source={require('../assets/search.png')}/>
</View>

<View style={{textAlign:"center"}}>
<Text style={{textAlign:"center",color:"white",fontWeight:"bold",paddingVertical:20}}>Find your Movie</Text>
<Text style={{textAlign:"center",color:"#898B8F"}}>Search movie, originals,as you like</Text>
</View>

<View style={{height:162}}></View>
</View> 
  ):(<Text>
    <View >
      {
        popularMovies.map((item,index)=>{
          return (
            <View key={index}>
            <Popularmuvi title={item.vote_average} image={item.poster_path}/>
            </View>
          )
        })
      }
      </View>
  </Text>)}
      
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
  