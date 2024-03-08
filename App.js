// import { useState } from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Welcome from './screens/Welcome.js';
import Play from './screens/Play.js';
import Register from './screens/register.js';
import Login from './screens/Login.js'
import Bottomnav from './screens/BottomNav/Bottomnav.js';
import Moviedetails from './screens/Moviedetails.js';
import Editprofile from './screens/Editprofile.js';
import { ThemeProviderIntoDarkMode } from './context/themeContext.jsx';
import { FIREBASE_AUTH } from './FirebaseConfiguration.js';
import { onAuthStateChanged } from 'firebase/auth';


const Stack = createNativeStackNavigator();
// const [user,setUser]= useState('')
// onAuthStateChanged(FIREBASE_AUTH, (user)=>{
//   if(user){
// setUser(user)
//   }else{
//     setUser(null)
//   }
// })

export default function App() {
  return (
    <ThemeProviderIntoDarkMode>
   <NavigationContainer>
   <Stack.Navigator initialRouteName='welcome'>
    {/* {user?(<></>):(<></>)} */}
        <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="play" component={Play} options={{ headerShown: false }} />
        <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="details" component={Moviedetails} options={{ headerShown: false }} />
        <Stack.Screen name="editprofile" component={Editprofile} options={{ headerShown: false }} />
       
      <Stack.Screen name="landing" component={Bottomnav} options={{ headerShown: false }} />
      <Stack.Screen name="Search" component={Bottomnav} options={{ headerShown: false }} />
      <Stack.Screen name="mylist" component={Bottomnav} options={{ headerShown: false }} />
      <Stack.Screen name="profile" component={Bottomnav} options={{ headerShown: false }} />

    </Stack.Navigator>
    </NavigationContainer>
    </ThemeProviderIntoDarkMode>
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1
  },
});

