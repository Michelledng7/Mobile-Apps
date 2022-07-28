import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
  return (
    <View style={styles.container}>
    <Text style ={styles.lighthHeader}>Michelle grab your </Text>
    <Text style = {styles.boldHeader}>Favourite gourmet</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        marginHorizontal: 30,
    },

        lighthHeader: {
            fontSize: 25,
            
        
        },
        
        boldHeader: {
            fontSize: 35,
            fontWeight: 'bold',
            
        }
    

})