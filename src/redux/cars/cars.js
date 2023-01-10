/* eslint-disable default-param-last */
import axios from 'axios';
import { carsApi } from '../api/api';

// Actions
const FETCH_CARS = 'cars/FETCH_CARS';

// Initial State
const initialState = {
  cars: [],
};

// Action Creation
export const fetchCars = (payload) => ({
  type: FETCH_CARS,
  payload,
});

// Fetch Cars
export const fetchCarsAsync = () => async (dispatch) => {
  const response = await axios.get(carsApi);
  const data = await response.data;
  dispatch(fetchCars(data));
};

// Reducer
const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS:
      return {
        ...state,
        cars: action.payload,
      };
    default:
      return state;
  }
};

export default carsReducer;
