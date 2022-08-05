import axios from 'axios';

export default axios.create({
  // baseURL: 'https://api.github.com'
   //https://api.github.com/search/repositories?q=${query}+language:${language}&per_page=20
    baseURL: 'https://api.yelp.com/v3/businesses', 
    headers: {
        Authorization: 'Bearer ' + 'oD25Cqqd75CkWcZQMwjY0MPLc01lExOiqozVIAr7xvwBCNNDCAgjYkH7At-W-LayhgeYpXHE-Sp2bjKfJ-mR1C4xr-3Da8_oA1HVLBcQUWOza64J7d4H8XfE7ZbmYnYx'
    },
    params: {
        limit: 20,
        location: 'San Francisco',
    }
})
