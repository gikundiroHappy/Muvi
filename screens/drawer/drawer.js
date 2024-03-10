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

  return (
      <Drawer.Navigator initialRouteName='profiledrawer'>
        <Drawer.Screen name="profile" component={Profile} options={{ headerShown: false }}/>
        <Drawer.Screen name="landingdrawer" component={Landing} options={{ headerShown: false }} />
        <Drawer.Screen name="searchdrawer" component={Search} options={{ headerShown: false }}/>
        <Drawer.Screen name="mylistdrawer" component={Mylist} options={{ headerShown: false }}/>
      </Drawer.Navigator>
  );
}