import {Text, View, StyleSheet, Image, TouchableOpacity, FlatList} from 'react-native';
import CategoryItem from './CategoryItem';
import { useState } from 'react';


export default function Categories({pickedCat, setPickedCat}) {
  

    const commonCategories = [
        {   name: 'Burger',
            image: require('../assets/images/burger.png'),
        },
        {
            name: 'Pizza',  
            image: require('../assets/images/pizza.png'),
            
        },
        {   
            name: 'Pasta',
            image: require('../assets/images/pasta.png'),
        },
        {
            name: 'Drinks',
            image: require('../assets/images/smoothies.png'),
        },
        {   
            name: 'Dessert',
            image: require('../assets/images/cake.png'),
        },
        {
            name: 'Steak',
            image: require('../assets/images/steak.png'),
        }
]


  return (
         
        <FlatList data={commonCategories} 
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
