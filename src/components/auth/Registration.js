/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { userSignUp } from '../../redux/users/users';

function Registration() {
  const [state, setState] = useState({
    email: '',
    username: '',
    password: '',
    password_confirmation: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  console.log(state);

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleUserLogIn(state);
    dispatch(userSignUp(state));
  };

  return (
    <div className="registration">
      <nav className="navbar">
        <div className="row col-12 d-flex justify-content-center text-white">
          <h2>Registration</h2>
        </div>
      </nav>
      <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black">
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

                      <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="text"
                              id="form3Example1c"
                              name="username"
                              className="form-control"
                              onChange={handleChange}
                            />
                            <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="email"
                              name="email"
                              id="form3Example3c"
                              className="form-control"
                              onChange={handleChange}
                            />
                            <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="password"
                              id="form3Example4c"
                              onChange={handleChange}
                              className="form-control"
                            />
                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                          </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw" />
                          <div className="form-outline flex-fill mb-0">
                            <input
                              type="password"
                              name="password_confirmation"
                              id="form3Example4cd"
                              onChange={handleChange}
                              className="form-control"
                            />
                            <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                          </div>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                          <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" />
                          <label className="form-check-label" htmlFor="form2Example3">
                            I agree all statements in
                            {' '}
                            <a href="#!">Terms of service</a>
                          </label>
                        </div>

                        <div className="divider d-flex align-items-center ms-2 mb-2">
                          <button type="submit" className="btn btn-primary">Register</button>
                        </div>

                        <div className="divider d-flex align-items-center my-4">
                          <p className="text-center fw-bold mx-3 mb-0 text-muted">Have an Account</p>
                          <Link to="/login" className="btn btn-primary">
                            Login
                          </Link>
                        </div>

                      </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample login"
                      />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Registration;
