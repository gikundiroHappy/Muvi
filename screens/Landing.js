import React, { useEffect, useState } from 'react';
import {View,Text, SafeAreaView,Image, ScrollView,FlatList,Dimensions ,TouchableOpacity,Modal} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { featuresData, trendData} from '../properties/index.jsx';
import Trends from '../components/trends.jsx';
import Features from '../components/features.jsx';
import Newrelease from '../components/newRelease.jsx';
import Popularmuvi from '../components/popular.jsx';
import { ActivityIndicator } from 'react-native-paper';
import { useContext } from 'react';
import { ChangeIntoDarkMode } from '../context/themeContext.jsx';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Landing({navigation}) {

  const [movies,setMovies] = useState([])
  const [popularMovies, setPopularMovies] = useState([])
  const [madeMovies, setMadeMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [model,setModel] = useState(false)

  // const GetData = async () =>{
  //    const userexist = await AsyncStorage.getItem('user_data')
  //    if(userexist == null){
  //     navigation.navigate('register')
  //    }
  //    console.log(await AsyncStorage.getItem('user_data'))
  // }
  
  const {darkMode,handleMode} = useContext(ChangeIntoDarkMode)

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWNjY2Y2ZDY4MWI5MDVhZDNlNzA3MTI3Y2UxMzVlYyIsInN1YiI6IjY1ZDg2YzBiY2FhNTA4MDE4YTM0MTM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2TFkovSh1xp8gcoTBYhee8W0E8YrGu-NvAMn6JxBNBo'
    }
  };

  const Getmovies = ()=>{
    setIsLoading(true)
    fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", options).
  then((response)=>response.json()).then((response)=>{
      setIsLoading(false)
    setMovies(response.results)
  }).catch((err)=>console.error(err))
  }

  const Getpopular = ()=>{
    setIsLoading(true)
    fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", options).
  then((response)=>response.json()).then((response)=>{
    setIsLoading(false)
    setPopularMovies(response.results)
  }).catch((err)=>console.error(err))
  }

  const GetmadeMovies = ()=>{
    setIsLoading(true)
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => {
        setIsLoading(false)
        setMadeMovies(response.results)
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    Getmovies()
    Getpopular()
    GetmadeMovies()
    // GetData()
  },[]);

  return (
<SafeAreaView style={{ backgroundColor:darkMode?'white':'#1F2123', height:height,width:width}}>

      
    <View style={{ paddingHorizontal:2}}>
    <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
      <View style={{width:"100%",backgroundColor:"#1F2123"}}>
    <Image source={require('../assets/home.png')}/>
    </View>
    <View style={{display:"flex",flexDirection:"row",gap:20}}>
    <Ionicons name='bookmark-outline' color='white' size={20}/>
    <TouchableOpacity onPress={()=>setModel(true)}>
    <Ionicons name='notifications-outline' color='white' size={20}/>
    </TouchableOpacity>
    <Modal visible={model}>
<View style={{padding:40}}>
  <Text>Your Notifications</Text>
</View>
    </Modal>
    </View>
    </View>

    <View style={{paddingVertical:10}}>
   <FlatList horizontal showsHorizontalScrollIndicator={false}
        data={featuresData}
        renderItem={({item}) => <Features name={item.name} />}
        keyExtractor={item => item.id.toString()}
        
      />
    </View>

    </View>

<ScrollView>
    <View style={{backgroundColor: darkMode?'rgba(000,000,000,0.2)':'#26282C', paddingHorizontal:20, paddingBottom:15}}>
      <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} >
      {
        trendData.map((data,index)=>{
          return (
            <View key={index} style={{paddingTop:30,marginRight:10 }}>
            <Trends  name={data.name}/>
            </View>
          )
        })
      }
      </ScrollView>
      </View>

      <View>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <Text style={{fontWeight:600,fontSize:20,color:darkMode?'black':'white',paddingVertical:20}}>New Release</Text>
        <Text style={{fontWeight:600,color:"#585A5C"}}>View More</Text>
      </View>

      <View>
{isLoading?  (<ActivityIndicator animating={isLoading} color='#FFD130'/>):( <FlatList horizontal showsHorizontalScrollIndicator={false}
        data={movies}
        renderItem={({item}) => <Newrelease title={item.vote_average} image={item.poster_path} onPress={() =>{ 
          navigation.navigate('details',item)}}/>}
        keyExtractor={item => item.id.toString()}
        
      />)}

    </View>
    </View>

    <View>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <Text style={{fontWeight:600,fontSize:20,color:darkMode?'black':'white',paddingVertical:20}}>Made for You</Text>
        <Text style={{fontWeight:600,color:"#585A5C"}}>View More</Text>
      </View>

      <View>
      {isLoading?  (<ActivityIndicator animating={isLoading} color='#FFD130'/>):(<FlatList horizontal showsHorizontalScrollIndicator={false}
        data={madeMovies}
        renderItem={({item}) => <Newrelease title={item.vote_average} image={item.poster_path} 
        onPress={() =>{ 
          navigation.navigate('details',item)}}
        />}
        keyExtractor={item => item.id.toString()}
        
      />)
      }
    
    </View>
    </View>

    </View>

<View style={{ paddingHorizontal:20}}>

<View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
        <Text style={{fontWeight:600,fontSize:20,color:darkMode?'black':'white',paddingVertical:20}}>Popular on <Text style={{color:"#E0C663"}}>Muvi</Text></Text>
        <Text style={{fontWeight:600,color:"#585A5C"}}>View More</Text>
</View>

{isLoading?  (<ActivityIndicator animating={isLoading} color='#FFD130'/>):(
     <View >
      {
        popularMovies.map((item,index)=>{
          return (
            <View key={index}>
            <Popularmuvi title={item.vote_average} image={item.poster_path} 
            onPress={() =>{ 
          navigation.navigate('details',item)}}
          />
            </View>
          )
        })
      }
      </View>)
}
</View>

</ScrollView>

</SafeAreaView>
  )}