import React from "react";
import { StyleSheet, View,TouchableOpacity,Text } from "react-native";
import Feather from 'react-native-vector-icons/Feather'

const Navigation = () => {
  return (
    <View style={styles.container}>
    <Feather name="home" size={25} color="#AFB2B1"/>
    <Feather name="search" size={25} color="#AFB2B1"/>
    <Feather name="folder" size={25} color="#AFB2B1"/>
    <Feather name="square" size={25} color="#AFB2B1"/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#202123",
    justifyContent:"space-between",
    paddingHorizontal:20,
    display:"flex",
    flexDirection:"row",
    padding: 17,
    position: "absolute",
    bottom: 0,
    width: "100%", 
  },
});

export default Navigation;
