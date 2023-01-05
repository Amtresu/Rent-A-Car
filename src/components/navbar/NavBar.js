import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png'


const NavBar = () => {
  return (
    <div>
    <div class="container-fluid">
        <div class="row flex-nowrap">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
                    <img className="logo" src={Logo} alt="Logo rental call" />

                    <NavLink to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline nav-link ">CARS</span>
                    </NavLink>

                    <NavLink to="/reserve" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark  text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline nav-link ">RESERVE</span>
                    </NavLink>

                    <NavLink to="/reservations" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark  text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline nav-link ">MY RESERVATIONS</span>
                    </NavLink>

                    <NavLink to="/add_car" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark  text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline nav-link">ADD CAR</span>
                    </NavLink>

                    <NavLink to="/delete_car" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark  text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline nav-link">DELETE CAR</span>
                    </NavLink>
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default NavBar
