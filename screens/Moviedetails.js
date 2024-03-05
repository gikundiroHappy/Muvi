import React,{useState,useEffect} from 'react';
import {View,StyleSheet,Text,Image,SafeAreaView, ScrollView,Dimensions,FlatList,ActivityIndicator,TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Newrelease from '../components/newRelease.jsx';
import axios from 'axios';
import YouTube from 'react-native-youtube-iframe';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Moviedetails({navigation,route}) {
  const [isLoading, setIsLoading] = useState(false)
  const [movies,setMovies] = useState([])
  const [madeMovies, setMadeMovies] = useState([])
  const [play, setPlay] = useState([])
  const [videoPlay, setVideoPlay] = useState(false)

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

  const handleVideoReady = () => {
    setVideoPlay(true);
};

  return (
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal:20,}}>
    <View style={{paddingVertical:30,display:"flex",flexDirection:"row",gap:10}}>
    <AntDesign name="arrowleft" color="#FBC101" size={20} onPress={() => navigation.goBack()}/>
    <Text style={{color:"white",fontWeight:"bold",fontSize:16 }}>Action</Text>
    </View>

  <View>
  {isLoading?  (<ActivityIndicator animating={isLoading} color='#FFD130'/>):(
  <YouTube
         remote="https://shahab-yousefi.github.io/react-native-youtube-iframe/youtube.html"
         videoId={play}
         height={200}
         width={'100%'}
         onReady={handleVideoReady}
  />)}
  </View>
  <ScrollView showsVerticalScrollIndicator={false}>
  <View>
    <Text style={{fontWeight:600,fontSize:20,color:"white",paddingVertical:20}}>{movie.title}</Text>
    <Text style={{fontSize:16,color:"#919397",paddingVertical:10}}>{movie.overview}</Text>
  </View>

<View style={{display:"flex",flexDirection:"row", gap:13,width:"100%",paddingVertical:20,}}>
  <TouchableOpacity style={{backgroundColor:"#FDD12F",display:"flex",flexDirection:"row", gap:6,alignItems:"center",justifyContent:"center",width:"48%",paddingVertical:9,borderRadius:5}}

  >
  <Feather name='play'/>
  <Text>Play</Text>
  </TouchableOpacity>

  <TouchableOpacity style={{borderWidth:1,borderColor:"#FDD12F",display:"flex",flexDirection:"row", gap:6,alignItems:"center",justifyContent:"center",width:"48%",paddingVertical:9,borderRadius:5}}>
  <Feather name='plus' color='#FDD12F'/>
  <Text style={{color:"white"}}>My List</Text>
  </TouchableOpacity>
</View>

    <View style={{backgroundColor:"#26282C", paddingHorizontal:20, paddingBottom:15}}>

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

    <View style={{backgroundColor:"#26282C", paddingHorizontal:20, paddingBottom:15}}>

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
        backgroundColor:"#26282C",
        flex:1,
        width:width,
        height:height,
    },
  });
  