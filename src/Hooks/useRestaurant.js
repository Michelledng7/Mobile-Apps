import { useState } from "react"
import yelp from "../api/yelp"

export default function useRestaurant() {
    const[results, setResults] = useState({
        data: null,
        loading: false,
        error: null
         })

    const searchRes = async (searchTerm) => {
        setResults({
            data: null,
            loading: true,
            error: null
        })

        try {
        const response = await yelp.get('/search/repositories?q=${searchTerm}+language:${language}&per_page=1')
        setResults({
            data: response.data.items,
            loading: false,
            error: null
        })
        } 
        catch (error ) {
            setResults({
                data: null,
                loading: false,
                error: "Something went wrong"
            })
          console.error(error)
      }
      console.log(response)
      
    }
 return [results, searchRes]
} 
