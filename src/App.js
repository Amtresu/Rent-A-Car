import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
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
import './Stylesheet.css';

function App() {
  // const user = useSelector((state) => state);
  // console.log(user);

  // const dispatch = useDispatch();
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/reserve" element={<ReserveForm />} />
        <Route path="/reservations" element={<MyReservations />} />
        <Route path="/registrations" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add_car" element={<AddCarForm />} />
        <Route path="/delete_car" element={<DeleteCarForm />} />
        <Route path="/cars/:id" element={<CarDetails />} />
      </Routes>
    </div>
  );
}

export default App;
