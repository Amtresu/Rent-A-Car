/* eslint-disable default-param-last */
import axios from 'axios';

const reserveCarAPI = 'https://final-capstone-api.onrender.com/reservations';
// const reserveCarAPI = 'http://localhost:3000/reservations';

// Actions
const RESERVE_CAR = 'RESERVE_CAR';

// Initial State
const initialState = {
};

// Action Creation
export const reserveCar = (payload) => ({
  type: RESERVE_CAR,
  payload,
});

// Fetch Cars
export const reserveCarAsync = (obj) => async (dispatch) => {
  const objtwo = {
    reserve_date: obj.reserve_date.slice(0, 10),
    car_id: +obj.car_id,
    user_id: obj.user_id,
  };
  const response = await axios.post(reserveCarAPI, objtwo);
  const data = await response.data;
  dispatch(reserveCar(data));
};

// Reducer
const reservationReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESERVE_CAR:
      return {
        ...state,
        reserveCar: action.payload,
      };
    default:
      return state;
  }
};

export default reservationReducer;
