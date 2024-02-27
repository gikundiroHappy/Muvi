import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import React from 'react'
export default function Profilecontent({icon, name}) {
  return (
    <View style={styles.container}>
            <Icon name={icon} type='material-community' iconStyle={{color:'white', fontSize:20}}/>
            <Text style={{color:'white', fontSize:16, fontWeight:'500'}}>{name}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        gap:20,
        paddingTop:25
    }
})