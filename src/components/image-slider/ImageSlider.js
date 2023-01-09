/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/style-prop-object */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  FaTwitter, FaPinterest, FaFacebook,
} from 'react-icons/fa';

function ImageSlider() {
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
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (

    <div className="main-slider">
      <h2 className="fw-bold home-text"> LATEST MODELS</h2>
      <h4 className="text-muted fw-bold select-text ">Please Select Your Preferred Car Model</h4>

      <Slider {...settings}>
        <div className="card border-light" style="width: 15rem;">
          <img src="https://shorturl.at/bHO23" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Car Name</h5>
            <p className="text-muted fw-bold text-center">................................</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
            <div className="d-flex justify-content-between me-5 ms-5">
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaTwitter className="fa-brands" />
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaFacebook className="fa-brands" />
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaPinterest className="fa-brands" />
              </a>
            </div>
          </div>
        </div>
        <div className="card border-light" style="width: 15rem;">
          <img src="https://shorturl.at/bHO23" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Car Name</h5>
            <p className="text-muted fw-bold text-center">................................</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
            <div className="d-flex justify-content-between me-5 ms-5">
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaTwitter className="fa-brands" />
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaFacebook className="fa-brands" />
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaPinterest className="fa-brands" />
              </a>
            </div>
          </div>
        </div>
        <div className="card border-light" style="width: 15rem;">
          <img src="https://shorturl.at/bHO23" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Car Name</h5>
            <p className="text-muted fw-bold text-center">................................</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
            <div className="d-flex justify-content-between me-5 ms-5">
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaTwitter className="fa-brands" />
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaFacebook className="fa-brands" />
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaPinterest className="fa-brands" />
              </a>
            </div>
          </div>
        </div>
        <div className="card border-light" style="width: 15rem;">
          <img src="https://shorturl.at/bHO23" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Car Name</h5>
            <p className="text-muted fw-bold text-center">................................</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
            <div className="d-flex justify-content-between me-5 ms-5">
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaTwitter className="fa-brands" />
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaFacebook className="fa-brands" />
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaPinterest className="fa-brands" />
              </a>
            </div>
          </div>
        </div>
        <div className="card border-light" style="width: 15rem;">
          <img src="https://shorturl.at/bHO23" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Car Name</h5>
            <p className="text-muted fw-bold text-center">................................</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
            <div className="d-flex justify-content-between me-5 ms-5">
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaTwitter className="fa-brands" />
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaFacebook className="fa-brands" />
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaPinterest className="fa-brands" />
              </a>
            </div>
          </div>
        </div>
        <div className="card border-light" style="width: 15rem;">
          <img src="https://shorturl.at/bHO23" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Car Name</h5>
            <p className="text-muted fw-bold text-center">................................</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
            <div className="d-flex justify-content-between me-5 ms-5">
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaTwitter className="fa-brands" />
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaFacebook className="fa-brands" />
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaPinterest className="fa-brands" />
              </a>
            </div>
          </div>
        </div>
        <div className="card border-light" style="width: 15rem;">
          <img src="https://shorturl.at/bHO23" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Car Name</h5>
            <p className="text-muted fw-bold text-center">................................</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
            <div className="d-flex justify-content-between me-5 ms-5">
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaTwitter className="fa-brands" />
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaFacebook className="fa-brands" />
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaPinterest className="fa-brands" />
              </a>
            </div>
          </div>
        </div>
        <div className="card border-light" style="width: 15rem;">
          <img src="https://shorturl.at/bHO23" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Car Name</h5>
            <p className="text-muted fw-bold text-center">................................</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
            <div className="d-flex justify-content-between me-5 ms-5">
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaTwitter className="fa-brands" />
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaFacebook className="fa-brands" />
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaPinterest className="fa-brands" />
              </a>
            </div>
          </div>
        </div>
        <div className="card border-light" style="width: 15rem;">
          <img src="https://shorturl.at/bHO23" className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title text-center">Car Name</h5>
            <p className="text-muted fw-bold text-center">................................</p>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card&apos;s content.</p>
            <div className="d-flex justify-content-between me-5 ms-5">
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaTwitter className="fa-brands" />
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaFacebook className="fa-brands" />
              </a>
              <a className="btn btn-outline-dark btn-floating m-1" href="#!" role="button">
                <FaPinterest className="fa-brands" />
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
