import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
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

function App() {
  let user = JSON.parse(localStorage.getItem('userDetails'));
  const userState = useSelector((state) => state.user);
  if (!user) {
    user = userState;
  }

  return (
    <div className="App">
      <NavBar />
      <MobileNavBar />
      <Routes>
        <Route path="/login" element={user.authenticated ? <Navigate to="/" /> : <Login />} />
        <Route path="/registrations" element={user.authenticated ? <Navigate to="/" /> : <Registration />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Cars />} />
          <Route path="/reserve" element={<ReserveForm />} />
          <Route path="/reservations" element={<MyReservations />} />
          <Route path="/cars/:id" element={<CarDetails />} />
        </Route>
        <Route path="/login" element={user.authenticated ? <Navigate to="/" /> : <Login />} />
        <Route element={<ProtectedAdminRoutes />}>
          <Route path="/add_car" element={<AddCarForm />} />
          <Route path="/delete_car" element={<DeleteCarForm />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
