/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { fetchCarsAsync } from '../../redux/cars/cars';
import { reserveCarAsync } from '../../redux/reservations/reservations';

const ReserveForm = (props) => {
  const obj = props;
  const [state, setState] = useState({ car_id: 0, reserve_date: '', user_id: 1 });

  const { cars } = obj;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsAsync());
    const user = JSON.parse(localStorage.getItem('userDetails'));
    if (user) {
      setState({
        ...state,
        user_id: +user.id,
      });
    }
  }, []);

  // Add state update handler
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const navigate = useNavigate();

  // Add form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reserveCarAsync(state));
    navigate('/reservations');
  };

  return (
    <div className="reservations">
      <div className="card add-car">
        <h5 className="card-header text-center fw-semibold fs-3">ADD CAR RESERVATION</h5>
        <div className="card-body">
          <form onSubmit={handleSubmit} className="mx-1 mx-md-4">

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-lock fa-lg me-3 fa-fw" />
              <div className="form-outline flex-fill mb-0">
                <label className="form-label" htmlFor="form3Example4c">Car Name</label>
                <select name="car_id" onChange={handleChange} className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" required>
                  <option value="">Select Vehicle Name</option>
                  {cars.map((car) => {
                    const { id, model } = car;
                    return <option value={id} key={id}>{model}</option>;
                  })}

                </select>

              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-user fa-lg me-3 fa-fw" />
              <div className="form-outline flex-fill mb-0">
                <label className="form-label" htmlFor="form3Example1c">Car Reservation Date</label>
                <input name="reserve_date" onChange={handleChange} type="datetime-local" id="form3Example1c" className="form-control" required />
              </div>
            </div>

            <div className="divider d-flex align-items-center ms-3 mb-2">
              <button type="submit" className="btn btn-success">Reserve Vehicle</button>
            </div>

            <div className="divider d-flex align-items-center my-4 ms-3">
              <Link to="/" className="btn btn-danger">
                Cancel
              </Link>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
};

export default ReserveForm;
