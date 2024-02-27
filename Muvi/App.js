
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home.js';
import Welcome from './screens/Welcome.js';
import Play from './screens/Play.js';
import Register from './screens/register.js';
import Login from './screens/Login.js'
import Landing from './screens/Landing.js'
import Mylist from './screens/Mylist.js';
import Profile from './screens/Profile.js';
import Search from './screens/Search.js';
import Bottomnav from './screens/BottomNav/Bottomnav.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
   <Stack.Navigator initialRouteName='landing'>
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="welcome" component={Welcome} options={{ headerShown: false }} />
        <Stack.Screen name="play" component={Play} options={{ headerShown: false }} />
        <Stack.Screen name="register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="landing" component={Landing} options={{ headerShown: false }} />
    </Stack.Navigator>
    </NavigationContainer>
 
  );
}

const styles = StyleSheet.create({
  container: {
  flex:1
  },
});

