import React from 'react';
import { NavLink } from 'react-router-dom';
// import Logo from '../../assets/logo.png';

function MobileNavBar() {
  return (
    <div className="mobile-nav-bar">
      <nav className="navbar bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Offcanvas navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body text-dark">
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <NavLink to="/" className="nav-link text-decoration-none">
                      <span className="fs-5 fw-bold">CARS</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/reserve" className="nav-link text-decoration-none">
                      <span className="fs-5 fw-bold">RESERVE</span>
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink to="/reservations" className="nav-link text-decoration-none">
                      <span className="fs-5 fw-bold">MY RESERVATIONS</span>
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink to="/add_car" className="nav-link text-decoration-none">
                      <span className="fs-5 fw-bold">ADD CAR</span>
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink to="/delete_car" className="nav-link text-decoration-none">
                      <span className="fs-5 fw-bold">DELETE CAR</span>
                    </NavLink>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MobileNavBar;
