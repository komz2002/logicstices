import React from 'react'
import "./Product.css"
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Product() {
  return (
    <>
  
  <div className="fimg">
  <h2 className="pro p-5">Projects Details</h2>
  <div className="img-2">
    <div className="img-3"></div>
  </div>
</div>

<div className="container-fluid">
  <div className="container">
    <div className="row align-items-center spaces">
      <div className="col-lg-10 col-md-9 col-sm-8">
        <div className="Recent">
          <h4>RECENT WORK</h4>
        </div>
        <div className="visi">
          Your Vision Our Expertise Creating Beautiful Spaces Inside
        </div>
      </div>
      <div className="col-lg-2 col-md-3 col-sm-4 text-end">
      <Link to="/">
              <Button
                className="arrowl"
                variant="primary"
                style={{ right: "10px", bottom: "10px" }}
              >
                More Projects
              </Button>
            </Link>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid">
  <div className="container">
    <div className="row g-3">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="img-4">
          <img
            src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/project/project-three__img6.jpg"
            alt=""
            className="img-fluid hover-effect" 
          />
        </div>
      </div>
      <div className="col-lg-8 col-md-8 col-sm-12">
        <div className="img-6">
          <img
            src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/project/project-three__img7.jpg"
            alt=""
            className="img-fluid hover-effect" 
          />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="container-fluid">
  <div className="container">
    <div className="row g-3">
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="img-6">
          <img
            src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/project/project-three__img8.jpg"
            alt=""
            className="img-fluid hover-effect" 
          />
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="img-6">
          <img
            src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/project/project-three__img9.jpg"
            alt=""
            className="img-fluid hover-effect" 
          />
        </div>
      </div>
      <div className="col-lg-4 col-md-4 col-sm-12">
        <div className="img-6">
          <img
            src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/project/project-three__img10.jpg"
            alt=""
            className="img-fluid hover-effect" 
          />
        </div>
      </div>
    </div>
  </div>
</div>

<div className="marquee-container">
  <div className="marquee">
    <h4>
      RapidFleet DriveLogistics Realk
      <img className="el" src="https://cdn-icons-png.flaticon.com/128/929/929495.png" alt=""/>
      DriveLogistics Logitruck Logitruck
      <img className="el" src="https://cdn-icons-png.flaticon.com/128/929/929495.png" alt=""/>
      RealTimeLogistics
      Ou
      <img className="el" src="https://cdn-icons-png.flaticon.com/128/929/929495.png" alt=""/>
      RapidFleet DriveLogistics Realk
      <img className="el" src="https://cdn-icons-png.flaticon.com/128/929/929495.png" alt=""/>
      DriveLogistics Logitruck Logitruck
      <img className="el" src="https://cdn-icons-png.flaticon.com/128/929/929495.png" alt=""/>
      RealTimeLogistics
      Ou
      DriveLogistics Logitruck Logitruck
      <img className="el" src="https://cdn-icons-png.flaticon.com/128/929/929495.png" alt=""/>
      RealTimeLogistics
    </h4>
  </div>
</div>

<div className="container-fluid bxe mt-4">
  <div className="container aa">
    <div className="row align-items-center">
      <div className="col-lg-8 col-md-12 mb-4">
        <div className="sol">Logistics Solutions for Success</div>
        <div className="Lor">Lorem Ipsum is simply dummy text of the printing</div>
      </div>
      <div className="col-lg-4 col-md-12 mb-4 text-lg-end text-center">
        <a href="/contact">
          <button type="button" className="btn btn-light">
            Contact Us
          </button>
        </a>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Product