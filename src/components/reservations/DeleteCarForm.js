/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { fetchCarsAsync } from '../../redux/cars/cars';

function DeleteCarForm() {
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsAsync());
  }, []);

  console.log(cars);

  return (
    <div className="reservations">
      <h2 className="fw-bold home-text ms-5"> DELETE A CAR</h2>
      <table className="table table-striped-columns">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Car Name</th>
            <th scope="col">Car Model</th>
            <th scope="col">Car Reservation Day</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        {cars.map((car) => (
          <tbody key={car.id}>
            <tr>
              <th scope="row">{car.id}</th>
              <td>{car.name}</td>
              <td>{car.model}</td>
              <td>{car.manufacturing_date}</td>
              <td><FaTrash /></td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
}

export default DeleteCarForm;
