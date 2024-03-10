import React from 'react';
import {View,StyleSheet,Text, Dimensions} from 'react-native';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Films() {

  return (
 <View style={styles.container}>
<Text>Films</Text>
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
  