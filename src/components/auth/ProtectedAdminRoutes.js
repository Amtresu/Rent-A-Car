import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import Cars from '../cars/Cars';
import Login from './Login';

const useAuth = () => {
  const user = useSelector((state) => state.user);
  if (user?.role?.name === 'admin' && user?.authenticated === true) {
    return true;
  }
  return false;
};

function ProtectedAdminRoutes() {
  const user = useSelector((state) => state.user);
  const isAuth = useAuth();
  if (user?.authenticated === true) {
    return isAuth ? <Outlet /> : <Cars />;
  }
  return <Login />;
}

export default ProtectedAdminRoutes;
