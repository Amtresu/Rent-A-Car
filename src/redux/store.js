import {
    combineReducers,
    configureStore,
    applyMiddleware,
  } from '@reduxjs/toolkit';
  import thunk from 'redux-thunk';
  import carReducer from './cars/car';
  
  const rootReducer = combineReducers({
    car: carReducer,
  });
  
  const store = configureStore({ reducer: rootReducer }, applyMiddleware(thunk));
  
  export default store;
  