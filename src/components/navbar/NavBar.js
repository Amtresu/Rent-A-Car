import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import {
   FaTwitter, FaVimeoV, FaPinterest, FaFacebook, FaGooglePlus
  } from 'react-icons/fa';


const NavBar = () => {
  return (
    <div className="nav-side-bar">
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
                    <img className="logo" src={Logo} alt="Logo rental call" />
                    <div class="container-fluid nav-link mb-1">
                        <NavLink to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                            <span class="fs-5 d-none d-sm-inline ms-4 mt-2 fw-bold">CARS</span>
                        </NavLink>
                    </div>

                    <div class="container-fluid nav-link mb-1">
                        <NavLink to="/reserve" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                            <span class="fs-5 d-none d-sm-inline ms-4 fw-bold">RESERVE</span>
                        </NavLink>
                    </div>

                    <div class="container-fluid nav-link mb-1">
                        <NavLink to="/reservations" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                            <span class="fs-5 d-none d-sm-inline ms-4 fw-bold">MY RESERVATIONS</span>
                        </NavLink>
                    </div>

                    <div class="container-fluid nav-link mb-1">
                        <NavLink to="/add_car" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                            <span class="fs-5 d-none d-sm-inline ms-4 fw-bold">ADD CAR</span>
                        </NavLink>
                    </div>

                    <div class="container-fluid nav-link mb-1">
                        <NavLink to="/delete_car" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-decoration-none">
                            <span class="fs-5 d-none d-sm-inline ms-4 fw-bold">DELETE CAR</span>
                        </NavLink>
                    </div>

                </div>
                <div class="container-fluid mb-5">
                    <div class="d-flex justify-content-between me-5 ms-5">
                        <FaTwitter className="fa-brands"/>
                        <FaFacebook className="fa-brands" />
                        <FaGooglePlus className="fa-brands" />
                        <FaVimeoV  className="fa-brands" />
                        <FaPinterest className="fa-brands" />
                    </div>
                    <div class="container mt-3 ms-3">
                            <h6 class="fa-text fw-bold">    
                        &copy; 2015 PIAGGIO & C.S.P.A - PIVA
                            </h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default NavBar
