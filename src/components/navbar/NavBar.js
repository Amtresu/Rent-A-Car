import React from 'react'
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png'


const NavBar = () => {
  return (
    <div>
    <div className="container-fluid">
        <div className="row flex-nowrap">
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
                <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
                    <img className="logo" src={Logo} alt="Logo rental call" />

                    <NavLink to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">CARS</span>
                    </NavLink>

                    <NavLink to="/reserve" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark  text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">RESERVE</span>
                    </NavLink>

                    <NavLink href="/reservations" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark  text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">MY RESERVATIONS</span>
                    </NavLink>

                    <NavLink to="/add_car" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark  text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">ADD CAR</span>
                    </NavLink>

                    <NavLink to="/delete_car" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark  text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">DELETE CAR</span>
                    </NavLink>
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default NavBar
