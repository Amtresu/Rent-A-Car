import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaTwitter, FaVimeoV, FaPinterest, FaFacebook, FaGooglePlus,
} from 'react-icons/fa';
import Logo from '../../assets/logo.png';

const handleClick = () => {
  localStorage.clear();
  window.location.reload();
};

function NavBar() {
  return (
    <div className="nav-side-bar">
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
              <img className="logo" src={Logo} alt="Logo rental call" />
              <div className="container-fluid nav-link mb-1">
                <NavLink to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                  <span className="fs-5 d-none d-sm-inline ms-4 mt-2 fw-bold">CARS</span>
                </NavLink>
              </div>

              <div className="container-fluid nav-link mb-1">
                <NavLink to="/reserve" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                  <span className="fs-5 d-none d-sm-inline ms-4 fw-bold">RESERVE</span>
                </NavLink>
              </div>

              <div className="container-fluid nav-link mb-1">
                <NavLink to="/reservations" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                  <span className="fs-5 d-none d-sm-inline ms-4 fw-bold">MY RESERVATIONS</span>
                </NavLink>
              </div>

              <div className="container-fluid nav-link mb-1">
                <NavLink to="/add_car" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                  <span className="fs-5 d-none d-sm-inline ms-4 fw-bold">ADD CAR</span>
                </NavLink>
              </div>

              <div className="container-fluid nav-link mb-1">
                <NavLink to="/delete_car" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                  <span className="fs-5 d-none d-sm-inline ms-4 fw-bold">DELETE CAR</span>
                </NavLink>
              </div>

              <div className="container-fluid nav-link mt-2 ms-4">
                <button type="button" className="btn btn-danger" onClick={() => { handleClick(); }}>Logout</button>
              </div>

            </div>
            <div className="container-fluid mb-5">
              <div className="d-flex justify-content-between me-5 ms-5">
                <a href="/socials" className="list-group-item list-group-item-action">
                  <FaTwitter className="fa-brands" />
                </a>
                <a href="/socials" className="list-group-item list-group-item-action">
                  <FaFacebook className="fa-brands" />
                </a>
                <a href="/socials" className="list-group-item list-group-item-action">
                  <FaGooglePlus className="fa-brands" />
                </a>
                <a href="/socials" className="list-group-item list-group-item-action">
                  <FaVimeoV className="fa-brands" />
                </a>
                <a href="/socials" className="list-group-item list-group-item-action">
                  <FaPinterest className="fa-brands" />
                </a>
              </div>
              <div className="container mt-3 ms-3">
                <h6 className="fa-text fw-bold">
                  &copy; 2015 PIAGGIO & C.S.P.A - PIVA
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
