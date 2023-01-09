import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const LOGIN_API = 'http://127.0.0.1:3000/login';
const SIGN_UP_API = 'http://127.0.0.1:3000/signup';

// const initialState = {};

const SIGN_UP = 'SIGN_UP';
const SIGN_IN = 'SIGN_IN';

export const userSignUp = createAsyncThunk(SIGN_UP, async (obj, { dispatch }) => {
  const response = await fetch(SIGN_UP_API, {
    method: 'POST',
    // headers: { 'Content-Type': 'application/json' },
    body: { user: obj },
  });
  const data = await response.json();
  console.log(data);
  dispatch({
    type: SIGN_UP,
    payload: data,
  });
  return data;
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
    console.log('Data: ', data);
    return data;
  }).catch((error) => {
    const err = error;
    console.log('error:', err);
    return err;
  });
});

const usersReducer = (action, state = {}) => {
  switch (action) {
    case SIGN_UP:
      console.log(action);
      return { ...action.payload };

    case SIGN_IN:
      console.log(action);
      return { ...action.payload };

    default:
      return state;
  }
};

export default usersReducer;
