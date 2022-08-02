import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import {FontAwesome } from '@expo/vector-icons';
import {elevation}  from '../common/styles';
import {useState} from 'react';

export default function SearchBar({setPickedCat}) {

  const [input, setInput] = useState("")
  const handleEndEditing = () => {
    if (!input) return
      setPickedCat(input)
      setInput("")
    }
  
  return (
    <View style={[styles.container, styles.elevation]}>
    <FontAwesome name="search" size = {25} />
    <TextInput style = {styles.inputbox} placeholder='Restaurant, food'
      value = {input} onChangeText = {(text) => {setInput(text)}}
      onEndEditing ={handleEndEditing}
    />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginTop: 5,
        marginHorizontal: 25,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 40,
    },
    elevation,

    inputbox: {
        fontSize: 20,
        marginLeft: 10,
    }

})
