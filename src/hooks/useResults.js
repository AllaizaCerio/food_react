import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        try{
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'cebu',
                }
            });
            setResults(response.data.businesses);
        } catch(err){
            setErrorMessage('Something went wrong');
        };
    };
    // Call searchApi when component is first rendered
    // don't do this because it causes an infinite loop.
    //searchApi('pasta');
    useEffect(() => { // use this to run code a set number of times
        searchApi();
    }, []);

    return [searchApi, results, errorMessage];
};