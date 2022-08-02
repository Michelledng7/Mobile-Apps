import { StyleSheet, Text, View } from 'react-native'
import useRestaurant from '../Hooks/useRestaurant'


export default function Restaurants() {

  const [{data, loading, error}, searchRes] = useRestaurant([])
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
