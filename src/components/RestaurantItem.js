import { View, Text, StyleSheet, Image, TouchableOpacity,ActivityIndicator} from "react-native";
import {withNavigation} from 'react-navigation';
import { elevation } from "../common/styles";


function RestaurantItem({restaurant, navigation}) {
    console.log( 'restaurant is: ' + {restaurant})
 
             
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Restaurant', {id: restaurant.id})}>
        <View style = {[styles.container, styles.elevation]}>
            <Image style = {styles.image} source = {{uri: restaurant.image_url? restaurant.image_url: null}} />
           
            <View style = {styles.infoContainer}>
                <Text style = {styles.header}>{restaurant.name}      </Text>
               <View style = {styles.info}>
                    <Text style = {styles.rating}>{restaurant.rating} </Text> 
                    <Text style = {styles.amount}>{restaurant.price}</Text>
               </View>
            </View>
         </View>
         </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 0,
        marginVertical: 10,
        borderRadius: 30,
        backgroundColor: 'lightyellow',
        alignSelf: 'stretch',
        alignItems: 'center',
        height: 80,
        width: '100%',
        flexDirection: 'row'
    },
    elevation,
    header: {
        fontWeight: 'bold',
        fontSize : 16,
        marginBottom: 4
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    infoContainer: {
        paddingHorizontal: 10,
    },
    info: {
        fontWeight: 'bold',
        flexDirection: 'row'
      },
      rating: {
        marginRight: 20
      },
      amount: {
        color: 'gold'
      }
    })

    export default withNavigation(RestaurantItem);

