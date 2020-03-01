const INITIAL_STATE = 'React Javascript';

export default(state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'GET_SEARCH_TERM':
      return action.payload;
    default:
      return state;
  }
};
