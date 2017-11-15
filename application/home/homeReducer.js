const initialState = {
  data: [{},{}],
  loading: true,
  error: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD':
      return Object.assign({}, state, { loading: true })
    case 'LOAD_SUCCESS':
      return Object.assign({}, state, { loading: false, error: null, data: action.data })
    case 'LOAD_FAIL':
      return Object.assign({}, state, { loading: false, data: null, error: action.error });
    default:
      return state;
  }
}

export default reducer;
