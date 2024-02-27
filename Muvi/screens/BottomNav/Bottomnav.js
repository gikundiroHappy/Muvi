
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Landing from '../Landing.js'
import Mylist from '../Mylist.js';
import Profile from '../Profile.js';
import Search from '../Search.js';

const Tab = createBottomTabNavigator();

export default function Bottomnav() {
  return (
   <Tab.Navigator initialRouteName='search'>
 
        <Tab.Screen name="mylist" component={Mylist} options={{ headerShown: false }} />
        <Tab.Screen name="profile" component={Profile} options={{ headerShown: false }} />
        <Tab.Screen name="search" component={Search} options={{ headerShown: false }} />
      </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1
  },
});

