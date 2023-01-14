/* eslint-disable no-console */
import React from 'react';
import { Outlet } from 'react-router';
import Login from './Login';

const useAuth = (obj) => obj && obj?.authenticated;

const ProtectedRoutes = (props) => {
  const obj = props;
  const { user } = obj;
  const isAuth = useAuth(user);
  console.log(isAuth);
  return isAuth ? <Outlet /> : <Login />;
};

export default ProtectedRoutes;
