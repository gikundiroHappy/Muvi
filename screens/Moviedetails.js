import React,{useState,useEffect,useContext} from 'react';
import {View,StyleSheet,Text,Image,SafeAreaView, ScrollView,Dimensions,FlatList,ActivityIndicator,TouchableOpacity, Linking} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Newrelease from '../components/newRelease.jsx';
import axios from 'axios';
import YoutubePlayer from "react-native-youtube-iframe";
import { ChangeIntoDarkMode } from '../context/themeContext'

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Moviedetails({navigation,route}) {
  const {darkMode} = useContext(ChangeIntoDarkMode)

  const [isLoading, setIsLoading] = useState(false)
  const [movies,setMovies] = useState([])
  const [madeMovies, setMadeMovies] = useState([])
  const [play, setPlay] = useState([])
  const [videoPlay, setVideoPlay] = useState(false)
  const [playing, setplaying] = useState(null)

  const  movie  = route.params;
  

  useEffect(() => {
    Getmovies()
    GetmadeMovies()
    Playmovie()
  },[]);

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
  
  const Playmovie = async ()=>{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?language=en-US`, options);
    setPlay(response.data.results[0].key);
  }

  const HandlePlay= () => {
    setVideoPlay(!videoPlay);
};

let message = '';
if (playing != null) message = `https://www.youtube.com/watch?v=${playing?.results[0]?.key}`

  return (
    <SafeAreaView style={[styles.container,{backgroundColor:darkMode?'white':'#26282C'} ]}>
      <View style={{paddingHorizontal:20,}}>
    <View style={{paddingVertical:30,display:"flex",flexDirection:"row",gap:10}}>
    <AntDesign name="arrowleft" color="#FBC101" size={20} onPress={() => navigation.goBack()}/>
    <Text style={{color:darkMode?'black':'white',fontWeight:"bold",fontSize:16 }}>Action</Text>
    </View>

  <View>
  {isLoading?  (<ActivityIndicator animating={isLoading} color='#FFD130'/>):(
  <YoutubePlayer
        height={200}
        play={videoPlay}
        videoId={play}
      />
  )}
  </View>
  <ScrollView showsVerticalScrollIndicator={false}>
  <View style={{display:'flex', flexDirection:"row", alignItems:"center",justifyContent:"space-between"}}>
    <Text style={{fontWeight:600,fontSize:20,color:darkMode?'black':'white',paddingVertical:20}}>{movie.title}</Text>
    <TouchableOpacity onPress={()=>Linking.openURL(`whatsapp://send?text=${message}`)}>
<FontAwesome name='whatsapp' color='#FDD12F' size={25}/>
    </TouchableOpacity>
  </View>
    <Text style={{fontSize:16,color:darkMode?'black':'#919397',paddingVertical:10}}>{movie.overview}</Text>
  

<View style={{display:"flex",flexDirection:"row", gap:13,width:"100%",paddingVertical:20,}}>
  <TouchableOpacity style={{backgroundColor:"#FDD12F",display:"flex",flexDirection:"row", gap:6,alignItems:"center",justifyContent:"center",width:"48%",paddingVertical:9,borderRadius:5}}
     onPress={HandlePlay}
  >
  <Ionicons name={videoPlay?'pause-outline':'play'} />
  <Text>{videoPlay ? "pause" : "play"}</Text>
  </TouchableOpacity>

  <TouchableOpacity style={{borderWidth:1,borderColor:"#FDD12F",display:"flex",flexDirection:"row", gap:6,alignItems:"center",justifyContent:"center",width:"48%",paddingVertical:9,borderRadius:5}}>
  <Feather name='plus' color='#FDD12F'/>
  <Text style={{color:darkMode?'black':"white"}}>My List</Text>
  </TouchableOpacity>
</View>

    <View style={{backgroundColor:darkMode?"white":"#26282C", paddingHorizontal:20, paddingBottom:15}}>

      <View>
      <View>
        <Text style={{fontWeight:600,fontSize:20,color:"white",paddingVertical:20}}>US Action movies</Text>
      </View>

      <View>
{isLoading?  (<ActivityIndicator animating={isLoading} color='#FFD130'/>):( <FlatList horizontal showsHorizontalScrollIndicator={false}
        data={movies}
        renderItem={({item}) => <Newrelease title={item.vote_average} image={item.poster_path}/>}
        keyExtractor={item => item.id.toString()}
        
      />)}

    </View>
    </View>

    <View>
      <View>
        <Text style={{fontWeight:600,fontSize:20,color:"white",paddingVertical:20}}>Made for You</Text>
      </View>

      <View>
      {isLoading?  (<ActivityIndicator animating={isLoading} color='#FFD130'/>):(<FlatList horizontal showsHorizontalScrollIndicator={false}
        data={madeMovies}
        renderItem={({item}) => <Newrelease title={item.vote_average} image={item.poster_path}/>}
        keyExtractor={item => item.id.toString()}
        
      />)
      }
    
    </View>
    </View>

    </View>

    <View style={{backgroundColor:darkMode?"white":"#26282C", paddingHorizontal:20, paddingBottom:15}}>

      <View>
      <View>
        <Text style={{fontWeight:600,fontSize:20,color:"white",paddingVertical:20}}>US Action movies</Text>
      </View>

      <View>
{isLoading?  (<ActivityIndicator animating={isLoading} color='#FFD130'/>):( <FlatList horizontal showsHorizontalScrollIndicator={false}
        data={movies}
        renderItem={({item}) => <Newrelease title={item.vote_average} image={item.poster_path}/>}
        keyExtractor={item => item.id.toString()}
        
      />)}

    </View>
    </View>

    <View>
      <View>
        <Text style={{fontWeight:600,fontSize:20,color:"white",paddingVertical:20}}>Made for You</Text>
      </View>

      <View>
      {isLoading?  (<ActivityIndicator animating={isLoading} color='#FFD130'/>):(<FlatList horizontal showsHorizontalScrollIndicator={false}
        data={madeMovies}
        renderItem={({item}) => <Newrelease title={item.vote_average} image={item.poster_path}/>}
        keyExtractor={item => item.id.toString()}
        
      />)
      }
    
    </View>
    </View>

    </View>

</ScrollView>
  </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        width:width,
        height:height,
    },
  });
  