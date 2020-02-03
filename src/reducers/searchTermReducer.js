const INITIAL_STATE = 'Software Engineer';

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_SEARCH_TERM':
      return action.payload;
    default:
      return state;
  }
};
