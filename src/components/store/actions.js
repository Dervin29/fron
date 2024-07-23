export const ADD_SCORE = 'ADD_SCORE';
export const SET_RECENT_ENTRY = 'SET_RECENT_ENTRY';

export const addScore = (username, score) => ({
  type: ADD_SCORE,
  payload: { username, score },
});

export const setRecentEntry = (entry) => ({
  type: SET_RECENT_ENTRY,
  payload: entry,
});
