import {combineReducers} from 'redux';

import videoReducer from './videoReducer';
import searchTermReducer from './searchTermReducer';
import selectedVideoReducer from './selectedVideoReducer';
import authReducer from './authReducer';

export default combineReducers({
  videoList:videoReducer,
  searchTerm:searchTermReducer,
  selectedVideo:selectedVideoReducer,
  auth:authReducer
});
