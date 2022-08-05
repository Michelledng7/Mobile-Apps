import {Text, View, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import CategoryItem from './CategoryItem';
import { useState } from 'react';


export default function Categories({data, pickedCat, setPickedCat}) {
  


  return (
         
        <FlatList 
            data={data} 
            renderItem = {({item, index}) => {
            return ( 
                <CategoryItem name={item.name} image = {item.image} index = {index} active={item.name === pickedCat} 
                handlePress = {() => {setPickedCat(item.name)}}
                />)}}
            horizontal
            showsHorizontalScrollIndicator = {false}
            keyExtractor = {(cat) => cat.name}
        />
    
    )
}

