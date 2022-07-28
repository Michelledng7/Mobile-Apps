import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import Header from './src/components/Header';
import SearchBar from './src/components/SearchBar';
import CategoryItem from './src/components/CategoryItem';

export default function App() {
  return (
    <View style={styles.container}>
    <StatusBar style="auto" />
    <Header />
    <SearchBar />
    <Text> Michelle APP</Text>
   <FlatList><CategoryItem /></FlatList> 
     
     
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
