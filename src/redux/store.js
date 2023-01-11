/* eslint-disable */ 

import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import usersReducer from './users/users';
import carsReducer from './cars/cars';
import reservationReducer from './reservations/reservations';
import reservedCarsReducer from './reservedCars/reservedCars';

const rootReducer = combineReducers({
  user: usersReducer,
  cars: carsReducer,
  reserve: reservationReducer,
  reservedCars: reservedCarsReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;