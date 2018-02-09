const initialState = { counter: 0 };

const actions = {
  INCREMENT: (counter) => {
    return { counter: counter + 1 };
  },
  DECREMENT: (counter) => {
    return { counter: counter - 1 };
  },
  ADD: (counter, value) => {
    return { counter: counter + value };
  },
  SUBTRACT: (counter, value) => {
    return { counter: counter - value };
  }
};

const reducer = (state = initialState, action) => {
  return actions[action.type] ?
    actions[action.type](state.counter, action.value) :
    state
}

export default reducer;