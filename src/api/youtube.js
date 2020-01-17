import Axios from 'axios';
import {YB_API} from '../googleKey';
//usually should not put the code here, but this is just a demo
const KEY = YB_API;

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part:'snippet',
      key:KEY
    }
});
