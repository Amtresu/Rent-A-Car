/* eslint-disable default-param-last */
import axios from 'axios';

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
  const id = JSON.parse(localStorage.getItem('userDetails')).id.toString();
  const response = await axios.get(`https://final-capstone-api.onrender.com/users/${id}/reservations`);
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
