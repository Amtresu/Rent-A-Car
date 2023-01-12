/* eslint-disable default-param-last */
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { carsApi } from '../api/api';
// Actions
const FETCH_CARS = 'cars/FETCH_CARS';
const DELETE_CAR = 'cars/DELETE_CARS';
const POST_CAR = 'POST_CAR';

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

export const deleteCars = (id) => async (dispatch) => {
  const response = await fetch(`${carsApi}/${id}`, {
    method: 'DELETE',
  });

  if (response.ok) dispatch({ type: DELETE_CAR, payload: id });
};

export const addCars = createAsyncThunk(POST_CAR, async (obj, { dispatch }) => {
  axios.post(
    carsApi,
    {
      car: obj,
    },
  ).then((response) => {
    const data = JSON.stringify(response);
    dispatch({
      type: POST_CAR,
      payload: data,
    });
    return data;
  }).catch((error) => {
    const err = error;
    return err;
  });
});

// Reducer
const carsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CARS:
      return {
        ...state,
        cars: action.payload,
      };
    case DELETE_CAR:
      return { ...state };
    case POST_CAR:
      return {
        ...state,
        car: action.payload,
      };
    default:
      return state;
  }
};

export default carsReducer;
