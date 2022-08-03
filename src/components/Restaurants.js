import { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import useRestaurant from '../Hooks/useRestaurant'


export default function Restaurants({searchTerm}) {

  const [{data, loading, error}, searchRes] = useRestaurant([])

  useEffect(() => {
    searchRes(searchTerm)
  }, [searchTerm])
  console.log({data: data, loading, error})
  console.log('searchTerm is:' +  searchTerm)

   return (
    <View style = {styles.container}>
        <Text style = {styles.header}>Top Restaurants</Text>
    </View>
   )
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 25,
    marginVertical: 15,
    //flex: 1,
  },
    header: {
        fontWeight: 'bold',
        fontSize : 20,
        paddingBottom: 10
    }
})
