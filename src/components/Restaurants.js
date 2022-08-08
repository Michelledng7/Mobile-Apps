import { useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, FlatList, TouchableOpacity} from 'react-native'
import useRestaurants from '../Hooks/useRestaurants'
import Categories from './Categories'
import RestaurantItem from './RestaurantItem'


export default function Restaurants({searchTerm}) {

  const [{data, loading, error}, searchRess] = useRestaurants([])

  useEffect(() => {
    searchRess(searchTerm)
  }, [searchTerm])

  console.log({data, loading, error})
  console.log('searchTerm is:' +  searchTerm)
  console.log(data)


  if (loading) return <ActivityIndicator size = 'large' marginVertical = {40} />
  if (error) return <View style = {styles.container}>
                      <Text style = {styles.header}>{error}</Text>
                    </View>
   return (
    <View style = {styles.container}>
        <Text style = {styles.header}>Top Restaurants</Text>
          <FlatList style = {styles.list} data = {data} keyExtractor = {(item)=> item.id}  
            renderItem = {({item}) => { 
            return  <TouchableOpacity > 
             <RestaurantItem sytle= {styles.list} restaurant = {item}/>
             
            </TouchableOpacity>
            }
            } />
    </View>
   )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 10
  },
  
  header: {
        fontWeight: 'bold',
        fontSize : 20,
        paddingBottom: 5
    },

  list: {
      fontSize: 50,
      fontFamily: '',
     // marginVertical: 20
   }
})
