const initialState = {
  counter: 0
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
  }
};

const reducer = (state = initialState, action) => {
  return actions[action.type] ?
    actions[action.type](state, action.value) :
    state
}

export default reducer;