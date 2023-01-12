/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */
/* eslint-disable */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCars } from '../../redux/cars/cars';

function AddCarForm() {
  const dispatch = useDispatch();

  const [state, setState] = useState ({
    user_id: 1,
    name: '',
    model: '',
    description: '',
    image: '',
    manufacturing_date: '',
  })

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addCars(state));
    event.target.reset()
  };
  

  return (
    <div className="reservations">
      <div className="card add-car">
        <h5 className="card-header text-center fw-semibold fs-3">ADD NEW CAR</h5>
        <div className="card-body">
          <form className="mx-1 mx-md-4"
         onSubmit={handleSubmit}>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user fa-lg me-3 fa-fw" />
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label" htmlFor="form3Example1c">Car Name</label>
                  <input
                    type="text"
                    id="form3Example1c"
                    name="name"
                    required
                    className="form-control"
                    onChange={handleChange}
                    
                  />
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user fa-lg me-3 fa-fw" />
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label" htmlFor="form3Example1c">Car Model</label>
                  <input type="text" id="form3Example1c" className="form-control"
                  name="model" required onChange={handleChange}
                   />
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label" htmlFor="form3Example3c">Car Description</label>
                  <textarea className="form-control" id="textAreaExample" rows="4"
                  name="description" required onChange={handleChange}
                   />
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock fa-lg me-3 fa-fw" />
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label" htmlFor="form3Example4c">Car Image URL</label>
                  <input type="url" id="form3Example4c" className="form-control"
                  name="image" required onChange={handleChange}
                   />
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock fa-lg me-3 fa-fw" />
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label" htmlFor="form3Example4c">Car Manufacturing Date</label>
                  <input type="datetime-local" id="form3Example4c" className="form-control" 
                  name="manufacturing_date" required onChange={handleChange}
                  />
                </div>
              </div>

              <div className="divider d-flex align-items-center ms-3 mb-2">
                <button type="submit" className="btn btn-success">Add New Car</button>
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
}

export default AddCarForm;
