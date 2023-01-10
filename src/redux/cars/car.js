/* eslint-disable */
import { createAsyncThunk } from '@reduxjs/toolkit';
const API = 'https://final-capstone-api.onrender.com/cars';
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
     image: car.image,
     name: car.name,
     description: car.description,
     model: car.model,
     manufacturing_date: car.manufacturing_date,
     reserved: car.reserved,
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
