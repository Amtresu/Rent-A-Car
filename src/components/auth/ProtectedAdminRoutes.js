import React from 'react';
// import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router';
import enroute from '../../enroute';
// import Cars from '../cars/Cars';
import Login from './Login';

// const useAuth = () => {
//   const user = useSelector((state) => state.user);
//   if (user?.role?.name === 'admin' && user?.authenticated === true) {
//     return true;
//   }
//   return false;
// };

const useAuth = (user) => {
  if (user?.role?.name === 'admin' && user?.authenticated === true) {
    return true;
  }
  return false;
};

function ProtectedAdminRoutes(props) {
  const obj = props;
  const { user } = obj;
  // const user = useSelector((state) => state.user);
  const isAuth = useAuth(user);
  if (user?.authenticated === true) {
    return isAuth ? <Outlet /> : enroute();
  }
  return <Login />;
}

export default ProtectedAdminRoutes;
