/* eslint-disable default-param-last */
import axios from 'axios';
// import { reserveApi } from '../api/api';

// Actions
const RESERVED_CAR = 'reservations/RESERVE_CAR';

// const reserveApi = 'http://127.0.0.1:3000/users/1/reservations';

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
  // const response = await axios.get(reserveApi);
  const id = JSON.parse(localStorage.getItem('userDetails')).id.toString();
  const response = await axios.get(`http://127.0.0.1:3000/users/${id}/reservations`);
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
