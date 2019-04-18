import Axios from 'axios';

//this is the API that I built for twitter
export default Axios.create({
    baseURL: 'https://khuongtwitter.herokuapp.com/tweets'
});
