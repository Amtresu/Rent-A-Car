/* eslint-disable */ 

import {
  combineReducers,
  configureStore,
  applyMiddleware,
} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import carReducer from './cars/car';
import usersReducer from './users/users';

const rootReducer = combineReducers({
  car: carReducer,
  user: usersReducer,
});

const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));

export default store;