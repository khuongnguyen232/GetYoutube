import Axios from 'axios';

//usually should not put the code here, but this is just a demo
const KEY = 'AIzaSyBomPyOWNJu7xSDDwoJIjHLlQqiEgVSv94';

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part:'snippet',
      key:KEY,
      type:'video'
    }
});
