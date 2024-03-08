import React,{createContext,useState,useEffect} from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ChangeIntoDarkMode = createContext()


export const ThemeProviderIntoDarkMode=({children})=>{
    const [darkMode,setDarkMode]=useState(false)

    // const data={
    //     name:"happy",
    // }
    useEffect(() => {
        const loadDarkModePreference = async () => {
          try {
            const savedDarkMode = await AsyncStorage.getItem('darkMode');
            if (savedDarkMode !== null) {
              setDarkMode(savedDarkMode === 'true');
            }
          } catch (error) {
            console.error('Error loading dark mode preference:', error);
          }
        };
        loadDarkModePreference();
      }, []);

    const HandleMode = ()=>{
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        AsyncStorage.setItem('darkMode', newDarkMode.toString());
    }
    return(
        <ChangeIntoDarkMode.Provider value={{darkMode,HandleMode}}>
        {children}
        </ChangeIntoDarkMode.Provider>
    )
}
