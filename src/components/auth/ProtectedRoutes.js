import React from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import Cars from '../cars/Cars';
import Login from './Login';

const useAuth = () => {
  const user = useSelector((state) => state.user);
  return user && user?.authenticated;
};

function ProtectedRoutes() {
  const isAuth = useAuth();
  console.log(isAuth);
  return isAuth ? <Outlet /> : <Login />;
}

export default ProtectedRoutes;
