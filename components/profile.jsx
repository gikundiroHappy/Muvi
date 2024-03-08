import { StyleSheet, Text, View } from 'react-native'
import { Icon } from 'react-native-elements'
import React from 'react'
import { useContext } from 'react'
import { ChangeIntoDarkMode } from '../context/themeContext'

export default function Profilecontent({icon, name}) {
  const {darkMode} = useContext(ChangeIntoDarkMode)
  return (
    <View style={styles.container}>
            <Icon name={icon} type='material-community' iconStyle={{color:darkMode?'black':'white', fontSize:20}}/>
            <Text style={{color:darkMode?'black':'white', fontSize:16, fontWeight:'500'}}>{name}</Text>
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