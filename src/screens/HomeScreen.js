import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import Restaurants from '../components/Restaurants';
import {useState} from 'react';
import Categories from '../components/Categories';

export default function HomeScreen() {

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
        }]

  const [pickedCat, setPickedCat] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Text>{pickedCat}</Text>
      <SearchBar setPickedCat={setPickedCat}/>
      <Categories data = {commonCategories} pickedCat={pickedCat} setPickedCat = {setPickedCat} />
      <Restaurants searchTerm ={pickedCat}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
     flex: 1,
      backgroundColor: 'rgb(255, 255, 255)',
      // alignItems: 'center',
      // justifyContent: 'center',
    },
  });