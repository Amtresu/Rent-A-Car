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
import './App.css';

function App() {
  let user = JSON.parse(localStorage.getItem('userDetails'));
  const userState = useSelector((state) => state.user);
  if (!user) {
    user = userState;
  }

  console.log(user);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={user.authenticated ? <Cars /> : <Navigate to="/login" />} />
        <Route path="/reserve" element={user.authenticated ? <ReserveForm /> : <Navigate to="/login" />} />
        <Route path="/reservations" element={<MyReservations user={user} />} />
        <Route path="/add_car" element={<AddCarForm />} />
        <Route path="/delete_car" element={<DeleteCarForm />} />
        <Route path="/registrations" element={<Registration />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/login" element={user.authenticated ? <Navigate to="/" /> : <Login />} />
      </Routes>
    </div>
  );
}

export default App;
