import React,{useContext} from "react";
import { StyleSheet, View, } from "react-native";
import { TextInput } from "react-native-paper";
import { ChangeIntoDarkMode } from '../context/themeContext'

const StandardTextInput = ({ label,value, onChangeText,icon,secureTextEntry,error,keyboardType,onPress}) => {
  const {darkMode} = useContext(ChangeIntoDarkMode)
  return (
    <View>
    <TextInput 
    label={label} 
    value={value} 
    onChangeText={onChangeText} 
    secureTextEntry={secureTextEntry} 
    error={error} keyboardType={keyboardType}
    style={[styles.textInput,{backgroundColor:darkMode?'white':'#26282C'} ]} 
    underlineColor='#77787C' 
    textColor={darkMode?'black':'white'}
    theme={{colors:{primary:"#E0BF36"}}}
    right={<TextInput.Icon size={19} icon={icon} color="#E0BF36" onPress={onPress}></TextInput.Icon>}
    />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: { 
   color: "#FFFFFF",
   fontWeight:700,
   fontSize:15,
  },
});

export default StandardTextInput;
