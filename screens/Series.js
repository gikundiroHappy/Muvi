import React from 'react';
import {View,StyleSheet,Text, Dimensions} from 'react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Series() {

  return (
 <View style={styles.container}>
<Text>Series</Text>
</View>

  );
}

const styles = StyleSheet.create({
    container: {
    display:"flex",
    height:height,
    width:width,
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
    },
  });
  