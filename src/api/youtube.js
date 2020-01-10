import Axios from 'axios';

//usually should not put the code here, but this is just a demo
const KEY = 'AIzaSyDli4cYLRg0fhJNCEFQmeSEtqNX7c6zvPk';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part:'snippet',
      key:KEY,
      type:'video'
    }
});
