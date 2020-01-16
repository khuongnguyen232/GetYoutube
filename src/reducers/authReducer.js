const INITIAL_STATE = {
  isSignedIn:false,
  accessToken:null
}

export default(state = INITIAL_STATE , action) => {
  switch(action.type){
    case 'SIGN_IN':
      return{...state,isSignedIn:true, token:action.payload.token,name:action.payload.name,imageURL:action.payload.imageURL};
    case 'SIGN_OUT':
      return{...state,isSignedIn:false, token:null};
    default:
      return state;
  }
};
