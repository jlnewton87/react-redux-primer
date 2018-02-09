const initialState = {
  counter: 0,
  results: []
};

const actions = {
  INCREMENT: (state) => {
    return {
      ...state,
      counter: state.counter + 1
    };
  },
  DECREMENT: (state) => {
    return {
      ...state,
      counter: state.counter - 1
    };
  },
  ADD: (state, value) => {
    return {
      ...state,
      counter: state.counter + value
    };
  },
  SUBTRACT: (state, value) => {
    return {
      ...state,
      counter: state.counter - value
    };
  },
  STORE_RESULT: (state) => {
    // const newResults = [ ...state.results, state.counter ]
    const newResults = state.results.concat(state.counter);
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