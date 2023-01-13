import React from 'react';
// import { useSelector } from 'react-redux';
import { Outlet } from 'react-router';
import Login from './Login';

// const useAuth = (obj) => {
//   // const user = useSelector((state) => state.user);
//   return obj && obj?.authenticated;
// };

const useAuth = (obj) => obj && obj?.authenticated;

function ProtectedRoutes(props) {
  const obj = props;
  const { user } = obj;
  const isAuth = useAuth(user);
  console.log(isAuth);
  return isAuth ? <Outlet /> : <Login />;
}

export default ProtectedRoutes;