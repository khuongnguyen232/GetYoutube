import Axios from 'axios';
import {YB_API} from '../googleKey';
const KEY = YB_API;

export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part:'snippet',
      key:KEY
    }
});
