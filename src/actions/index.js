import API from '../api/youtube';

export const fetchVideoList = (numVid) => async (dispatch,getState) => {
  const {searchTerm} = getState();
  try {
    const response = await API({method:'get',url:'search',params:{
      q: searchTerm,
      maxResults:numVid
    }});
    dispatch({type:'FETCH_VIDEO_LIST',payload:response.data});
  } catch(err) {
    dispatch({type:'FETCH_VIDEO_LIST_ERR'});
  }
};

export const getSearchTerm = (term) => async (dispatch) => {
  if(!term) {
    dispatch({type:'GET_SEARCH_TERM_ERR'});
  }

  dispatch({type:'GET_SEARCH_TERM',payload:term});
}
