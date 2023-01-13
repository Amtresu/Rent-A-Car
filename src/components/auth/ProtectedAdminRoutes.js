import React from 'react';
import { Outlet } from 'react-router';
import enroute from '../../enroute';
import Login from './Login';

const useAuth = (user) => {
  if (user?.role?.name === 'admin' && user?.authenticated === true) {
    return true;
  }
  return false;
};

function ProtectedAdminRoutes(props) {
  const obj = props;
  const { user } = obj;
  const isAuth = useAuth(user);
  if (user?.authenticated === true) {
    return isAuth ? <Outlet /> : enroute();
  }
  return <Login />;
}

export default ProtectedAdminRoutes;
