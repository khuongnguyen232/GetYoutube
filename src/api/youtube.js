import Axios from 'axios';
import {YB_API} from '../googleKey';
const KEY = YB_API;
//only use one API for pulling Youtube Data, the KEY won't be pushed to Github
export default Axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part:'snippet',
      key:KEY
    }
});
