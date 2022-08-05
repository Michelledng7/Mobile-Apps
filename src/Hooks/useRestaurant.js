import { useState } from "react"
import yelp from "../api/yelp"

export default function useRestaurant() {
    const[result, setResult] = useState({
        data: null,
        loading: false,
        error: null
         })

    const searchResItem = async (id) => {
        setResult({
            data: null,
            loading: true,
            error: null
        })

        try {   
        const response = await yelp.get('/search/', {
            params: {
                limit: 20,
                location: 'Toronto',
                term: id
            }
        })
        setResult({
            data: response.data,
            loading: false,
            error: null
        })
        console.log('oneitem' + searchTerm)
        console.log('itemresponse: ' + response)
        } 
        catch (error ) {
            setResult({
                data: null,
                loading: false,
                error: "single item error"
            })
          console.error(error)
      }
      
      
    }
 return [result, searchResItem]
} 
