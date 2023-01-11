import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { Link } from 'react-router-dom';
import { fetchReservationsAsync } from '../../redux/reservations/reservations';

function MyReservations() {
  const { reservations } = useSelector((state) => state.reserve);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchReservationsAsync());
  }, []);

  console.log(reservations);

  return (
    <div className="reservations">
      <h2 className="fw-bold home-text ms-5"> MY RESERVATIONS</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td colSpan="2">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MyReservations;
