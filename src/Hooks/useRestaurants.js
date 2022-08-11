import { useState } from "react"
import yelp from "../api/yelp"

export default function useRestaurants() {
    const[results, setResults] = useState({
        data: null,
        loading: false,
        error: null
         })

    const searchRess = async (searchTerm) => {
        setResults({
            data: null,
            loading: true,
            error: null
        })

        try {
        const response = await yelp.get('/search', {
            params: {
                limit: 10,
                location: 'Melbourne',
                term: searchTerm
        }})
            setResults({
                data: response.data.businesses,
                loading: false,
                error: null
            }) 
            console.log('results is:' + results.data)
            console.log('hooks' + searchTerm)
            console.log(response.data.businesses)
        } 
        catch (error ) {
            setResults({
                data: null,
                loading: false,
                error: "fetching groups errors"
            })
          console.error(error)
      }
    }
   
 return [results, searchRess]
} 
