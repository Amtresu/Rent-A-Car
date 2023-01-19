import React from 'react';
import { Outlet } from 'react-router';
import Enroute from '../../Enroute';
import Login from './Login';

const useAuth = (user) => {
  if (user?.role?.name === 'admin' && user?.authenticated === true) {
    return true;
  }
  return false;
};

const ProtectedAdminRoutes = (props) => {
  const obj = props;
  const { user } = obj;
  const isAuth = useAuth(user);
  if (user?.authenticated === true) {
    return isAuth ? <Outlet /> : Enroute();
  }
  return <Login />;
};

export default ProtectedAdminRoutes;
