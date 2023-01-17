/* eslint-disable import/extensions */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReservationsAsync } from '../../redux/reservations/myReservations';

function MyReservations() {
  const { reservations } = useSelector((state) => state.reserved);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservationsAsync());
  }, []);

  return (
    <div className="my-reservations">
      <h2 className="fw-bold ms-5"> MY RESERVATIONS</h2>
      <div className="table-responsive min-vh-100">
        <table className="table table-striped-columns table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Car Name</th>
              <th scope="col">Car Model</th>
              <th scope="col">Car Reservation Day</th>
            </tr>
          </thead>
          {reservations.map((reserved, idx) => (
            <tbody key={`key-${idx + 1}`}>
              <tr>
                <th scope="row">{idx + 1}</th>
                <td>{reserved.car.name}</td>
                <td>{reserved.car.model}</td>
                <td>{reserved.reservation.reserve_date}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
}

export default MyReservations;
