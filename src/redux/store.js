/* eslint-disable */ 

import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import carReducer from './cars/car';
import usersReducer from './users/users';
import carsReducer from './cars/cars';

const rootReducer = combineReducers({
  car: carReducer,
  user: usersReducer,
  cars: carsReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;