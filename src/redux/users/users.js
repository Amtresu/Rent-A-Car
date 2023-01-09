import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// const LOGIN_API = 'http://127.0.0.1:3000/login';
const LOGIN_API = 'https://final-capstone-api.onrender.com/login';
// const SIGN_UP_API = 'http://127.0.0.1:3000/signup';
const SIGN_UP_API = 'https://final-capstone-api.onrender.com/signup';

// const initialState = {};

const SIGN_UP = 'SIGN_UP';
const SIGN_IN = 'SIGN_IN';

export const userSignUp = createAsyncThunk(SIGN_UP, async (obj, { dispatch }) => {
  axios.post(
    SIGN_UP_API,
    {
      user: obj,
    },
  ).then((response) => {
    const data = response;
    dispatch({
      type: SIGN_IN,
      payload: data,
    });
    localStorage.setItem('userDetails', JSON.stringify(data.data.data));
    return data;
  }).catch((error) => {
    const err = error;
    // console.log('error:', err);
    return err;
  });
});

export const userLogIn = createAsyncThunk(SIGN_IN, async (obj, { dispatch }) => {
  axios.post(
    LOGIN_API,
    {
      user: obj,
    },
  ).then((response) => {
    const data = response;
    dispatch({
      type: SIGN_IN,
      payload: data,
    });
    localStorage.setItem('userDetails', JSON.stringify(data.data.data));
    // console.log('Data: ', data.data.data);
    return data;
  }).catch((error) => {
    const err = error;
    // console.log('error:', err);
    return err;
  });
});

// eslint-disable-next-line default-param-last
const usersReducer = (state = {}, action) => {
  switch (action.type) {
    case SIGN_UP:
      // console.log(action);
      return { ...action.payload };

    case SIGN_IN:
      // console.log(action);
      return { ...action.payload };

    default:
      return state;
  }
};

export default usersReducer;
