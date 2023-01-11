/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import { fetchReservationsAsync } from '../../redux/reservations/myReservations';

function MyReservations() {
  const { reservations } = useSelector((state) => state.reserved);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservationsAsync());
  }, []);

  console.log(reservations);

  return (
    <div className="reservations">
      <h2 className="fw-bold  ms-5"> MY RESERVATIONS</h2>
      {reservations.map((reserved) => (
        <table className="table table-striped-columns" key={reserved.id}>
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Car Name</th>
              <th scope="col">Car Model</th>
              <th scope="col">Car Reservation Day</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{reserved.car.name}</td>
              <td>{reserved.car.model}</td>
              <td>{reserved.reservation.reserve_date}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default MyReservations;
