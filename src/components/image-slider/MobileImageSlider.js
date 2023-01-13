/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/style-prop-object */
import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  FaTwitter, FaPinterest, FaFacebook,
} from 'react-icons/fa';
import { fetchCarsAsync } from '../../redux/cars/cars';

function MobileImageSlider() {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: '#97BF0F' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block', background: '#97BF0F' }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarsAsync());
  }, []);

  return (

    <div className="mobile-image-slider">
      <h2 className="fw-bold home-text"> LATEST MODELS</h2>
      <h4 className="text-muted fw-bold select-text ">Please Select Your Preferred Car Model</h4>

      <Slider {...settings}>
        {cars.map((car) => (
          <div key={car.id} className="card border-light">
            <img src={car.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">
                <Link to={`/cars/${car.id}`} state={car.name}>
                  {car.name}
                </Link>
              </h5>
              <p className="text-muted fw-bold text-center">................................</p>
              <p className="card-text">{car.model}</p>
              <p className="card-text car-desc">
                Description:
                <br />
                {car.description}
              </p>
              <div className="d-flex justify-content-evenly me-2 ms-2">
                <a className="btn btn-outline-secondary rounded-circle" href="#!" role="button">
                  <FaTwitter className="fa-brands mt-1" />
                </a>
                <a className="btn btn-outline-secondary rounded-circle" href="#!" role="button">
                  <FaFacebook className="fa-brands mt-1" />
                </a>
                <a className="btn btn-outline-secondary rounded-circle" href="#!" role="button">
                  <FaPinterest className="fa-brands mt-1" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MobileImageSlider;
