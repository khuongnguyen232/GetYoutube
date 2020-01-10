import API from '../api/youtube';

export const fetchVideoList = (numVid) => async (dispatch,getState) => {
  const {searchTerm} = getState();
  try {
    const response = await API({method:'get',url:'search',params:{
      q: searchTerm,
      maxResults:numVid
    }});
    dispatch({type:'FETCH_VIDEO_LIST',payload:response.data});
    dispatch({type:'SET_SELECTED_VIDEO',payload:response.data.items[0]});
  } catch(err) {
    dispatch({type:'FETCH_VIDEO_LIST_ERR'});
  }
};

export const getSearchTerm = (term) => async (dispatch) => {
  if(!term) {
    dispatch({type:'GET_SEARCH_TERM_ERR'});
  } else {
    dispatch({type:'GET_SEARCH_TERM',payload:term});
  }
}

export const setSelectedVideo = (video) => async(dispatch) => {
  if(!video) {
    dispatch({type:'SET_SELECTED_VIDEO_ERR'})
  } else {
    dispatch({type:'SET_SELECTED_VIDEO',payload:video})
  }
}
