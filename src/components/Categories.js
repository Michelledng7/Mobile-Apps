import {View, FlatList} from 'react-native';
import CategoryItem from './CategoryItem';

export default function Categories({data, pickedCat, setPickedCat}) {
  return (
    <View style = {{marginBottom: 10}}>
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
        </View>
    
    )
}

