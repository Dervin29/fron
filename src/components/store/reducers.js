import { ADD_SCORE } from './actions';

const initialState = {
  scores: [
    { username: 'Alice', score: '02:15:30' },
    { username: 'Bob', score: '01:45:20' },
    { username: 'Charlie', score: '03:10:40' },
    { username: 'Dave', score: '02:05:35' },
    { username: 'Eve', score: '01:55:25' },
    { username: 'Frank', score: '02:35:20' },
    { username: 'Grace', score: '02:25:20' },
    { username: 'Hank', score: '01:35:22' },
    { username: 'Ivy', score: '03:05:38' },
    { username: 'Jack', score: '02:45:31' }
  ],
  images: [
    "https://images.pexels.com/photos/15155729/pexels-photo-15155729/free-photo-of-photo-of-a-black-racing-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCORE:
      const newScores = [...state.scores, action.payload];
      return { ...state, scores: newScores };
    default:
      return state;
  }
};

export default rootReducer;
