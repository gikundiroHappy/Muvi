import React, { useState } from 'react';
import {StyleSheet,Image,View,TouchableOpacity,Text} from 'react-native';
import Modal from "react-native-modal";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Landing from '../Landing.js'
import Mylist from '../Mylist.js';
import Profile from '../Profile.js';
import Search from '../Search.js';
import Feather from 'react-native-vector-icons/Feather'
import DrawerNavigator from '../drawer/drawer.js';
import { TopNavigation } from '../TopNav/TopNav.js';
import Button from '../../components/Button.js';

const Tab = createBottomTabNavigator();

export default function Bottomnav() {
  const [model,setModel] = useState(false)

  return (
   <Tab.Navigator initialRouteName='landingpage'>

        <Tab.Screen name="landingpage" component={TopNavigation} 
        options={{ 
          headerStyle: { backgroundColor: "#1F2123", height:100 },
          headerTintColor: "#1F2123",
          headerBackTitleVisible: false,
          headerLeft: () => <Image source={require('../../assets/home.png')} style={{height:50, width:150,marginLeft:20}}/>,
          headerRight: () => {
            return (
              <View style={{display:"flex",flexDirection:"row",gap:20,paddingRight:20}}>
                  <Ionicons name='bookmark-outline' color='white' size={20}/>
                  <TouchableOpacity onPress={()=>setModel(true)}>
                  <Ionicons name='notifications-outline' color='white' size={20}/>
                  </TouchableOpacity>
                <Modal visible={model}>
                  <View style={{
                        position:"absolute",
                        top:70,
                        height: 250,
                        width: 250,
                        backgroundColor: "#26282C",
                        paddingVertical: 20,
                        paddingHorizontal: 30,
                        display: "flex",
                        alignSelf:"flex-end",
                        justifyContent:"space-between",
                        borderRadius: 20,}}>
                   <Text style={{color:'white',fontWeight:"bold", fontSize:15}}>Your Notifications</Text>
                   <View>
                   <Button title="Ok" onPress={()=>setModel(!model)}/>
                   </View>
                   
                  </View>
                </Modal>
              </View>
            )
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: '#AFB2B1',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#1F2123',
            borderTopColor: '#1F2123',
          },
          tabBarIcon:({focused})=>
          <Feather name="home" size={25} color={focused? '#FFD130' :'#AFB2B1'}/>
       }}
         />

        <Tab.Screen name="searchpage" component={Search} 
        options={{ headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: '#AFB2B1',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#1F2123',
            borderTopColor: '#1F2123',
          },
          tabBarIcon:({focused})=>
          <Feather name="search" size={25} color={focused? '#FFD130' : '#AFB2B1'}/>
         }} />

        <Tab.Screen name="mylistpage" component={Mylist} 
        options={{ headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: '#AFB2B1',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#1F2123',
            borderTopColor: '#1F2123',
          },
          tabBarIcon: ({focused}) =>
            <Feather name="folder" size={25} color={focused? '#FFD130' : '#AFB2B1'}/>
         }} />

        <Tab.Screen name="profilepage" component={DrawerNavigator} 
        options={{ headerShown: false,
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: '#AFB2B1',
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#1F2123',
            borderTopColor: '#1F2123',
          },
          tabBarIcon: ({focused}) =>
            <Feather name="grid" size={25} color={focused? '#FFD130' : '#AFB2B1'}/>
         }} 
         />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1
  },
});

