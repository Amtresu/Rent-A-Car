import React from 'react';
import {
  Routes, Route, Navigate,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cars from './components/cars/Cars';
import NavBar from './components/navbar/NavBar';
import ReserveForm from './components/reservations/ReserveForm';
import Registration from './components/auth/Registration';
import Login from './components/auth/Login';
import MyReservations from './components/reservations/MyReservations';
import AddCarForm from './components/reservations/AddCarForm';
import DeleteCarForm from './components/reservations/DeleteCarForm';
import CarDetails from './components/cars/CarDetails';
import MobileNavBar from './components/navbar/MobileNavBar';
import ProtectedAdminRoutes from './components/auth/ProtectedAdminRoutes';
import ProtectedRoutes from './components/auth/ProtectedRoutes';
import './App.css';
import './media-queries-breakpoints/Small.css';
import './media-queries-breakpoints/Large.css';
import './media-queries-breakpoints/XLarge.css';
import './media-queries-breakpoints/XXLarge.css';
import './media-queries-breakpoints/Desktop.css';

const App = () => {
  let user = JSON.parse(localStorage.getItem('userDetails'));
  const userState = useSelector((state) => state.user);
  const cars = useSelector((state) => state.cars.cars);
  if (!user) {
    user = userState;
  }

  return (
    <div className="App">
      {user.authenticated ? <NavBar /> : null}
      {user.authenticated ? <MobileNavBar /> : null}
      <MobileNavBar />
      <Routes>
        <Route path="/login" element={user.authenticated ? <Navigate to="/" /> : <Login />} />
        <Route path="/registrations" element={user.authenticated ? <Navigate to="/" /> : <Registration />} />
        <Route element={<ProtectedRoutes user={user} />}>
          <Route path="/" element={<Cars />} />
          <Route path="/reserve" element={<ReserveForm cars={cars} />} />
          <Route path="/reservations" element={<MyReservations user={user} />} />
          <Route path="/cars/:id" element={<CarDetails />} />
        </Route>
        <Route path="/login" element={user.authenticated ? <Navigate to="/" /> : <Login />} />
        <Route element={<ProtectedAdminRoutes user={user} />}>
          <Route path="/add_car" element={<AddCarForm />} />
          <Route path="/delete_car" element={<DeleteCarForm />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
