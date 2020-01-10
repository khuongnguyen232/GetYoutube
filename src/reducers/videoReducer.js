export default(state = [], action) => {
  switch (action.type) {
    case 'FETCH_VIDEO_LIST':
      return action.payload;
    default:
      return state;
  }
};
