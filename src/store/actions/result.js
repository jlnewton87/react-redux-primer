import * as actionTypes from './actionTypes';

export const storeResult = value => {
  return (dispatch, getState) => {
    // const currentState = getState();
    setTimeout(() => {
      dispatch(saveResult(value));
      // console.log(currentState);
    }, 2000);
  };
}

export const saveResult = value => {
  return { type: actionTypes.STORE_RESULT, value };
}

export const deleteResult = value => {
  return { type: actionTypes.DELETE_RESULT, value };
}