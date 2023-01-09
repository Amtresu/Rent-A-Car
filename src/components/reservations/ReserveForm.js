/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */
import React from 'react';
import { Link } from 'react-router-dom';

function ReserveForm() {
  return (
    <div className="reservations">
      <div className="card add-car">
        <h5 className="card-header text-center fw-semibold fs-3">ADD CAR RESERVATION</h5>
        <div className="card-body">
          <form className="mx-1 mx-md-4">

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-user fa-lg me-3 fa-fw" />
              <div className="form-outline flex-fill mb-0">
                <label className="form-label" htmlFor="form3Example1c">Car Name</label>
                <input type="text" id="form3Example1c" className="form-control" />
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-lock fa-lg me-3 fa-fw" />
              <div className="form-outline flex-fill mb-0">
                <label className="form-label" htmlFor="form3Example4c">Car Reservation Date</label>
                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                  <option selected>Select Vehicle Name</option>
                  <option value="1">Lamborghini</option>
                  <option value="2">Mercedes</option>
                  <option value="3">Chevrolet</option>
                  <option value="4">Nissan GTR</option>
                  <option value="5">Audi R8</option>
                </select>

              </div>
            </div>

            <div className="divider d-flex align-items-center ms-3 mb-2">
              <button type="button" className="btn btn-success">Reserve Vehicle</button>
            </div>

            <div className="divider d-flex align-items-center my-4 ms-3">
              <Link to="/" class="btn btn-danger">
                Cancel
              </Link>
            </div>

          </form>
        </div>
      </div>

    </div>
  );
}

export default ReserveForm;
