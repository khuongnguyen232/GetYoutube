import API from '../api/youtube';
//all actions will be handle by reducer later

//catch by Redux videoList state
export const fetchVideoList = (numVid) => async (dispatch,getState) => {
  const {searchTerm} = getState();
  try {
    const response = await API({method:'get',url:'search',params:{
      q: searchTerm,
      maxResults:numVid,
      type:'video'
    }});
    dispatch({type:'FETCH_VIDEO_LIST',payload:response.data});
    dispatch({type:'SET_SELECTED_VIDEO',payload:response.data.items[0]});
  } catch(err) {
    dispatch({type:'FETCH_VIDEO_LIST_ERR'});
  }
};

//catch by Redux searchTerm state
export const getSearchTerm = (term) => async (dispatch) => {
  if(!term) {
    dispatch({type:'GET_SEARCH_TERM_ERR'});
  } else {
    dispatch({type:'GET_SEARCH_TERM',payload:term});
  }
}

//catch by Redux selectedVideo state
export const setSelectedVideo = (video) => async(dispatch) => {
  if(!video) {
    dispatch({type:'SET_SELECTED_VIDEO_ERR'})
  } else {
    dispatch({type:'SET_SELECTED_VIDEO',payload:video})
  }
}

//catch by Redux auth state (both signIn and signOut)
export const signIn = (token,name,imageURL) => {
  return{
    type:'SIGN_IN',
    payload:{token,name,imageURL}
  };
};

export const signOut = () => {
  return{
    type:'SIGN_OUT'
  };
};
