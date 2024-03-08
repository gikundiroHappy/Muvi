
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Landing from '../Landing.js'
import Mylist from '../Mylist.js';
import Profile from '../Profile.js';
import Search from '../Search.js';
import Feather from 'react-native-vector-icons/Feather'
import DrawerNavigator from '../drawer/drawer.js';

const Tab = createBottomTabNavigator();

export default function Bottomnav() {
  return (
   <Tab.Navigator initialRouteName='landingpage'>

        <Tab.Screen name="landingpage" component={Landing} 
        options={{ headerShown: false,
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

