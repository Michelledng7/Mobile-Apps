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
        const response = await yelp.get(`/${id}`, {
            params: {
                location: 'Melbourne'
            }
        })
        setResult({
            data: response.data.photos,
            loading: false,
            error: null
        })
       
        console.log('itemresponse: ' + response.photos)
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
