import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const LOGIN_API = 'https://final-capstone-api.onrender.com/login';
const SIGN_UP_API = 'https://final-capstone-api.onrender.com/signup';

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
      payload: {
        ...data.data.data,
        authenticated: true,
      },
    });
    localStorage.setItem('userDetails', JSON.stringify({ ...data.data.data, authenticated: true }));
    return data;
  }).catch((error) => {
    const err = error;
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
      payload: {
        ...data.data.data,
        authenticated: true,
      },
    });
    localStorage.setItem('userDetails', JSON.stringify({ ...data.data.data, authenticated: true }));
    return data;
  }).catch((error) => {
    const err = error;
    return err;
  });
});

const initialState = {
  authenticated: false,
};

// eslint-disable-next-line default-param-last
const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP:
      return { ...action.payload };

    case SIGN_IN:
      return { ...action.payload };

    default:
      return state;
  }
};

export default usersReducer;
