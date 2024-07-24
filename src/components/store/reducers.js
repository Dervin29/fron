import { ADD_SCORE, SET_RECENT_ENTRY } from './actions';

const initialState = {
  scores: [
    { "username": "Alice", "score": "02:15:30" },
    { "username": "Bob", "score": "01:45:20" },
    { "username": "Charlie", "score": "03:10:40" },
    { "username": "Dave", "score": "02:05:35" },
    { "username": "Eve", "score": "01:55:25" },
    { "username": "Frank", "score": "02:35:20" },
    { "username": "Grace", "score": "02:25:20" },
    { "username": "Hank", "score": "01:35:22" },
    { "username": "Ivy", "score": "03:05:38" },
    { "username": "Jack", "score": "02:45:31" },
    { "username": "Karen", "score": "02:50:22" },
    { "username": "Leo", "score": "01:25:17" },
    { "username": "Mona", "score": "03:15:45" },
    { "username": "Nina", "score": "01:40:28" },
    { "username": "Oscar", "score": "02:20:33" },
    { "username": "Paul", "score": "01:30:12" },
    { "username": "Quinn", "score": "03:05:50" },
    { "username": "Rita", "score": "02:10:55" },
    { "username": "Sam", "score": "02:30:40" },
    { "username": "Tina", "score": "01:55:12" },
    { "username": "Uma", "score": "03:00:22" },
    { "username": "Vera", "score": "02:25:45" },
    { "username": "Will", "score": "01:35:38" },
    { "username": "Xena", "score": "03:10:15" },
    { "username": "Yara", "score": "01:50:33" },
    { "username": "Zane", "score": "02:40:22" },
    { "username": "Alan", "score": "02:15:50" },
    { "username": "Beth", "score": "01:45:12" },
    { "username": "Cody", "score": "03:05:30" },
    { "username": "Diana", "score": "02:00:15" },
    { "username": "Eli", "score": "01:30:28" },
    { "username": "Fiona", "score": "02:50:35" },
    { "username": "Gabe", "score": "03:20:40" },
    { "username": "Holly", "score": "01:55:50" },
    { "username": "Ian", "score": "02:25:15" },
    { "username": "Jill", "score": "02:05:30" }
  ],
  
  images: [
    "https://images.pexels.com/photos/15155729/pexels-photo-15155729/free-photo-of-photo-of-a-black-racing-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/158971/pexels-photo-158971.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/12801/pexels-photo-12801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/9843281/pexels-photo-9843281.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/7517640/pexels-photo-7517640.jpeg?auto=compress&cs=tinysrgb&w=400"
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SCORE:
      return {
        ...state,
        scores: [...state.scores, action.payload],
      };
    case SET_RECENT_ENTRY:
      return {
        ...state,
        recentEntry: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
