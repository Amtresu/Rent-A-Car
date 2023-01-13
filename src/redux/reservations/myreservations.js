/* eslint-disable default-param-last */
import axios from 'axios';
import { reserveApi } from '../api/api';

// Actions
const RESERVED_CAR = 'reservations/RESERVE_CAR';

// Initial State
const initialState = {
  reservations: [],
};

// Action Creation
export const reservedCar = (payload) => ({
  type: RESERVED_CAR,
  payload,
});

// Fetch Cars Reserved
export const fetchReservationsAsync = () => async (dispatch) => {
  const response = await axios.get(reserveApi);
  const data = await response.data;
  dispatch(reservedCar(data));
};

// Reducer
const myReservationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVED_CAR:
      return {
        ...state,
        reservations: action.payload,
      };
    default:
      return state;
  }
};

export default myReservationsReducer;
