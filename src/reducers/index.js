import {combineReducers} from 'redux';

import videoReducer from './videoReducer';
import searchTermReducer from './searchTermReducer';

export default combineReducers({
  videoList:videoReducer,
  searchTerm:searchTermReducer
});
