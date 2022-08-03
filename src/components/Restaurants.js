import { useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, FlatList} from 'react-native'
import useRestaurant from '../Hooks/useRestaurant'


export default function Restaurants({searchTerm}) {

  const [{data, loading, error}, searchRes] = useRestaurant([])

  useEffect(() => {
    searchRes(searchTerm)
  }, [searchTerm])
  console.log({data: data, loading, error})
  console.log('searchTerm is:' +  searchTerm)

  if (loading) return <ActivityIndicator size = 'large' marginVertical = {40} />
  if (error) return <View style = {styles.container}>
                      <Text style = {styles.header}>{error}</Text>
                    </View>
   return (
    <View style = {styles.container}>
        <Text style = {styles.header}>Top Restaurants</Text>
        <FlatList data = {data} keyExtractor = {(item)=> item.id} 
        renderItem = {({item}) => {
          return <Text sytle= {styles.header}>{item.name}</Text>
          console.log("hello")
        }} />
    </View>
   )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15
  },
    header: {
        fontWeight: 'bold',
        fontSize : 20,
        paddingBottom: 10
    }
    
})
