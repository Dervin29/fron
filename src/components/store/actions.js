// store/actions.js
export const ADD_SCORE = 'ADD_SCORE';

export const addScore = (username, score) => ({
  type: ADD_SCORE,
  payload: { username, score }
});
