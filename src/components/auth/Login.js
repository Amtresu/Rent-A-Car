/* eslint-disable jsx-a11y/label-has-associated-control */
// import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { userLogIn } from '../../redux/users/users';

function Login() {
  const user = useSelector((state) => state.user);

  console.log(user);
  const [state, setState] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  // const LOGIN_API = 'http://127.0.0.1:3000/login';
  // const LOGIN_API = 'https://final-capstone-api.onrender.com/login';

  // const handleUserLogIn = async (obj) => {
  //   const response = await fetch('http://127.0.0.1:3000/login', {
  //     method: 'POST',
  //     header: {
  //       'Access-Control-Allow-Origin': '*',
  //     },
  //     body: JSON.stringify({ user: obj }),
  //   });
  //   console.log('William in Login: ', response);
  //   const data = await response.json();
  //   console.log('William in login: ', data);
  //   return data;
  // };

  // const handleUserLogIn = async (obj) => {
  //   axios.post(
  //     'http://127.0.0.1:3000/login',
  //     {
  //       user: obj,
  //     },
  //   ).then((response) => {
  //     console.log(response);
  //     const data = response.json();
  //     console.log(data);
  //     return data;
  //   }).catch((error) => {
  //     const err = error;
  //     return err;
  //   });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleUserLogIn(state);
    dispatch(userLogIn(state));
  };

  // const [myLocalStorageData, setMyLocalStorageData] = useState({}) useEffect(() => {
  //   const data = localStorage.getItem('authenticated') setMyLocalStorageData(JSON.parse(data))
  // }, [])

  const data = JSON.parse(localStorage.getItem('userDetails')) || {
    authenticated: false,
  };
  // console.log(data.authenticated);

  if (data.authenticated === false) {
    return (
      <section className="vh-100 log-in">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid"
                alt="Sample login form"
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3 mb-2">Sign in</p>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    id="form3Example3"
                    onChange={handleChange}
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email"
                  />
                  <label className="form-label" htmlFor="form3Example3">Username</label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    name="password"
                    onChange={handleChange}
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                  />
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div className="form-check mb-0">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                    </label>
                  </div>
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                  >
                    Login
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0 ms-1">
                    Don&apos;t have an account?
                    <Link to="/registrations" className="btn btn-primary ms-3">
                      Register
                    </Link>
                  </p>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    );
    // eslint-disable-next-line no-else-return
  } else {
    return <Navigate to="/" />;
  }
}
export default Login;
