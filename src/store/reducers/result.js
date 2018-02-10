const initialState = {
  results: []
};

const actions = {
  STORE_RESULT: (state, result) => {
    // const newResults = [ ...state.results, state.counter ]
    const newResults = state.results.concat(result);
    return {
      ...state,
      results: newResults
    };
  },
  DELETE_RESULT: (state, index) => {
    // const newResults = [ ...state.results ];
    // newResults.splice(index, 1);
    const newResults = state.results.filter( (result, i) => i !== index );
    return {
      ...state,
      results: newResults
    };
  }
};

const reducer = (state = initialState, action) => {
  return actions[action.type] ?
    actions[action.type](state, action.value) :
    state
}

export default reducer;