import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Pressable,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Landing from '../Landing.js'
import Mylist from '../Mylist.js';
import Profile from '../Profile.js';
import Search from '../Search.js';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const Logout = async()=>{
    FIREBASE_AUTH.signOut()
    navigation.navigate('login')
  }
  return (
    // <NavigationContainer>
      <Drawer.Navigator initialRouteName='profiledrawer'>
        <Drawer.Screen name="profile" component={Profile} options={{ headerShown: false }}/>
        <Drawer.Screen name="landingdrawer" component={Landing} options={{ headerShown: false }} />
        <Drawer.Screen name="searchdrawer" component={Search} options={{ headerShown: false }}/>
        <Drawer.Screen name="mylistdrawer" component={Mylist} options={{ headerShown: false }}/>

      {/* <Pressable onPress={Logout}
      style={{borderWidth:1, width:"100%", borderColor:"#3B3E3F",borderRadius:5,paddingVertical:10}}><Text style={{color:"#B76C5B",textAlign:"center"}}> Log Out</Text>
      </Pressable> */}
      </Drawer.Navigator>
    // </NavigationContainer>
  );
}