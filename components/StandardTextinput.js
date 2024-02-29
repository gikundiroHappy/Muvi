import React from "react";
import { StyleSheet, View, } from "react-native";
import { TextInput } from "react-native-paper";

const StandardTextInput = ({ label,value, onChangeText,icon,secureTextEntry,error,keyboardType}) => {
  return (
    <View>
    <TextInput label={label} value={value} onChangeText={onChangeText} secureTextEntry={secureTextEntry} error={error} keyboardType={keyboardType}
    style={styles.textInput} underlineColor='#77787C' textColor="white"
    theme={{colors:{primary:"#E0BF36"}}}
    right={<TextInput.Icon size={19} icon={icon} color="#E0BF36" ></TextInput.Icon>}
    />
    </View>
  );
};
const styles = StyleSheet.create({
  textInput: {
   backgroundColor:"#26282C", 
   color: "#FFFFFF",
   fontWeight:700,
   fontSize:15,
  },
});

export default StandardTextInput;
