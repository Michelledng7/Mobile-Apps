import { View, Text, StyleSheet, Image, ActivityIndicator} from "react-native";
import useRestaurant from "../Hooks/useRestaurant";
import {useEffect} from 'react'
import { elevation } from "../common/styles";


export default function RestaurantItem({restaurant}) {

    // const [{data, loading, error}, searchResItem] = useRestaurant([])

    // useEffect(() => {
    //     searchResItem(id)
    // },[id])
   
        console.log('restaurant is:' +  restaurant)
   // console.log({data: data, loading, error})

    // if (loading) return <ActivityIndicator size = 'large' marginVertical = {40} />
    // if (error) return 
    //         <View style = {styles.container}>
    //             <Text style = {styles.header}>rseitemerror</Text>
    //         </View>
             
    return (
        <View style = {[styles.container, styles.elevation]}>
            <Image style = {styles.image} source = {{uri: restaurant.image_url}} />
            
            <Text>{restaurant.name}</Text>
            <Text>{restaurant.rating}</Text> 
            <Text>{restaurant.price}</Text>
                
        </View>
        )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 25,
        marginVertical: 15,
        borderRadius: 30,
        backgroundColor: 'yellow',
        alignSelf: 'stretch',
        alignItems: 'center',
        height: 100,
        flexDirection: 'row'
    },
    elevation,
    header: {
        fontWeight: 'bold',
        fontSize : 20
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50
    }
  
      })

