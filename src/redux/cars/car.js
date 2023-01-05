/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
const API = 'https://type.fit/api/quotes';
const initialState = [];
const ADD_CAR = 'ADD_CAR'

const getCars = createAsyncThunk(ADD_CAR, async () => {
  const data = await fetch(API, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then((response) => response.json());
  let item;
  try {
    const api = await data;
    item = api.map((car) => ({
     key: car.id,
     id: car.id,
      author: car.author,
    }));
  } catch (error) {
    console.error('ERR', error);
  }
  return item;
});

export default (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_CAR}/fulfilled`:
      if(state == 0 )
      return action.payload
    default:
      return state;
  }
};
export { getCars };
