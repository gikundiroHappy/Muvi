import React,{useEffect, useState,useContext} from 'react';
import {View,StyleSheet, ScrollView,Image,Dimensions, SafeAreaView,FlatList,ActivityIndicator} from 'react-native';
import Mylistcard from '../components/Mylistcard';
import { listData } from '../properties';
import Features from '../components/features';
import { ChangeIntoDarkMode } from '../context/themeContext'

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Mylist() {
  const {darkMode} = useContext(ChangeIntoDarkMode)

  const [moviesList,setMoviesList] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    GetMovieList()
  },[]);

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZWNjY2Y2ZDY4MWI5MDVhZDNlNzA3MTI3Y2UxMzVlYyIsInN1YiI6IjY1ZDg2YzBiY2FhNTA4MDE4YTM0MTM1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2TFkovSh1xp8gcoTBYhee8W0E8YrGu-NvAMn6JxBNBo'
    }
  };

  const GetMovieList = ()=>{
    setIsLoading(true)
    fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
      .then(response => response.json())
      .then(response => {
        setIsLoading(false)
        setMoviesList(response.results)
      })
      .catch(err => console.error(err));
  }
  

  return (
 <SafeAreaView style={[styles.container,{backgroundColor:darkMode?'white':'#1F2123'} ]}>
     <View style={{width:"100%",paddingHorizontal:20, paddingVertical:10,backgroundColor:"black"}}>
     <Image source={require('../assets/home.png')} />
     </View>

     <View style={{paddingBottom:10}}>
     <FlatList horizontal showsHorizontalScrollIndicator={false}
        data={listData}
        renderItem={({item}) => <Features name={item.name} />}
        keyExtractor={item => item.id.toString()}
        
      />
      </View>

  <ScrollView>
  {isLoading?  (<ActivityIndicator animating={isLoading} color='#FFD130'/>):(
  <View style={{backgroundColor:"#26282C"}}>
      {
        moviesList.map((item,index)=>{
          return (
            <View key={index}>
            <Mylistcard title={item.title} image={item.poster_path} year={item.release_date} category={item.popularity}/>
            </View>
          )
        })
      }
      </View>
      )}
      
      </ScrollView>
 </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
    width:width,
    height:height
    },
  });
  