import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import SearchBar from './src/components/SearchBar';
import CategoryItem from './src/components/CategoryItem';
import Restaurants from './src/components/Restaurants';
import {useState} from 'react';
import Categories from './src/components/Categories';

export default function App() {

const [input, setInput] = useState("")

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <SearchBar />
      <Categories />
      <Restaurants />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'left',
    // justifyContent: 'center',
  },
});
