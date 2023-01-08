/* eslint jsx-a11y/label-has-associated-control: ["error", { assert: "either" } ] */
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
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
            <form>
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3 mb-2">Sign in</p>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="Name"
                  id="form3Example3"
                  className="form-control form-control-lg"
                  placeholder="Enter a valid Username"
                />
                <label className="form-label" htmlFor="form3Example3">Username</label>
              </div>

              <div className="form-outline mb-3">
                <input
                  type="password"
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
                  type="button"
                  className="btn btn-primary"
                >
                  Login
                </button>
                <p className="small fw-bold mt-2 pt-1 mb-0 ms-1">
                  Don&apos;t have an account?
                  <Link to="/registrations" class="btn btn-primary ms-3">
                    Register
                  </Link>
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>
      <div
        className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary mt-2"
      >
        <div className="text-white mb-3 mb-md-0">
          Copyright © 2023. All rights reserved.
        </div>
        <div>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-twitter" />
          </a>
          <a href="#!" className="text-white me-4">
            <i className="fab fa-google" />
          </a>
          <a href="#!" className="text-white">
            <i className="fab fa-linkedin-in" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Login;
