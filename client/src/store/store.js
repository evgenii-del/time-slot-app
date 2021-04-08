import { createStore } from 'redux';

import slotReducer from './reducers';

const daysArr = [
  { id: 1, name: 'Monday' },
  { id: 2, name: 'Tuesday' },
  { id: 3, name: 'Wednesday' },
  { id: 4, name: 'Thursday' },
  { id: 5, name: 'Friday' },
  { id: 6, name: 'Saturday' },
  { id: 7, name: 'Sunday' },
];
const timesArr = [...Array(24).keys()].map((i) => i + 1);

const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {};

const initialState = {
  daysArr,
  timesArr,
  user,
};

const store = createStore(
  slotReducer,
  initialState,
);

export default store;
