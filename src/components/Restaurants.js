import { StyleSheet, Text, View } from 'react-native'



export default function Restaurants() {
  return (
    <View style = {styles.container}>
        <Text style = {styles.header}>Restaurants</Text>
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
        fontWeight: 'bold'
    }
})
