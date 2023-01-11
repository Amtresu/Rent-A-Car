/* eslint-disable default-param-last */
import axios from 'axios';

const reservedCarsAPI = 'https://final-capstone-api.onrender.com/reservations';

// Actions
const GET_RESERVED_CARS = 'GET_RESERVED_CARS';

// Initial State
const initialState = [];

// Action Creation
export const fetchReservedCars = (payload) => ({
  type: GET_RESERVED_CARS,
  payload,
});

// Fetch Cars
export const fetchReservedCarsAsync = () => async (dispatch) => {
  const response = await axios.get(reservedCarsAPI);
  const data = await response.data;
  dispatch(fetchReservedCars(data));
};

// Reducer
const reservedCarsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RESERVED_CARS:
      return action.payload;
    default:
      return state;
  }
};

export default reservedCarsReducer;
