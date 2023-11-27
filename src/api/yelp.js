import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
       Authorization: 'Bearer DYo9x7dbqxoXfQFT1e71ryP_6G-raLJ0e1o-8p5OYGcSOcTIWxT1GqTwr6WakvbSbIZGtRdwlQSMnncvi4uoWo4z_FXblgY12RGZ0_Qp3Gj0bZEf-9mXblqUri8cZXYx' 
    }
});