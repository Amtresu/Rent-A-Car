/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { fetchCarsAsync, deleteCars } from '../../redux/cars/cars';

const DeleteCarForm = () => {
  const { cars } = useSelector((state) => state.cars);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsAsync());
  }, []);

  const handleSubmit = (car) => {
    dispatch(deleteCars(car.id));
    dispatch(fetchCarsAsync());
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  };
  return (
    <div className="my-reservations">
      <h2 className="fw-bold home-text ms-5"> DELETE A CAR</h2>
      <div className="table-responsive ">
        <table className="table table-striped-columns table-bordered">
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
                <td>
                  <button
                    type="button"
                    onClick={() => { handleSubmit(car); }}
                  >
                    <FaTrash />
                    {' '}

                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default DeleteCarForm;
