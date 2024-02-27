import React from "react";
import { StyleSheet, View,TouchableOpacity,Text } from "react-native";

const Button = ({ title,onPress}) => {
  return (
    <View>
    <TouchableOpacity style={styles.button} onPress={onPress} >
    <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FBC101",
    padding: 17,
    alignItems: "center",
    borderRadius:5
  },
});

export default Button;
