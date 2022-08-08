import {View, Text, StyleSheet, FlatList, ActivityIndicator, Dimensions} from 'react-native';
import { Image } from 'react-native';
import useRestaurant from '../Hooks/useRestaurant';
import { useEffect } from 'react';

export default function RestaurantScreen({navigation}) {

    const id = navigation.getParam('id')
    const [{data, loading, error}, searchResItem] = useRestaurant([])
    console.log('data is' +data)
    const mwidth = Math.round(Dimensions.get('window').width)
    const mheight = Math.round((mwidth * 9 / 16))

    useEffect(() => {
      searchResItem(id)
    }, [])

    if (loading) return <ActivityIndicator size = 'large' marginVertical = {40} />
    if (error) return <View >
       <Text >{error}</Text>
     </View>
  return (
    <View>
        <Text>RestaurantScreen</Text>
       {data && <FlatList data = {data} keyExtractor = {(item) => item}
          renderItem = {({item}) => {
            return (<Image style = {{width: mwidth, height: mheight}} source={{ uri: item }} />)}} /> }
    </View>
  )
}

