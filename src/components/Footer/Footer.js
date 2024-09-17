import React from 'react'
import '../styles/Footer.css';
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter } from 'react-icons/fa';



function Footer() {
  return (
    <>
    <footer className="footer mt-2">
      
    <div className="container-fluid">
      <div className="container">
        <div className="row">
        <div className="col-lg-3">
        <h1 className="get">
      <Link to="/location" style={{ textDecoration: 'none', color: 'white' }}>Location</Link>
    </h1>
          <p className="para"> Our Logistics</p>
          <p className="para">3304 Reedy Drive
            Elkhart,</p><p> Indiana 46514</p>
          <p className="para">(866) 847-8330</p>
            <p>(574) 262-9525</p>
            </div>
      <div className="col-lg-3">
        <h1 className="get">
      <Link to="/About" style={{ textDecoration: 'none', color: 'white' }}>About</Link></h1>
        <p className="para">Our Story
        </p>
        <p className="para">
        EQ United</p>
        <p className="para">EQ Systems</p>
        <p className="para">
        Customer Reviews
      </p>
      <Link to="/privacy" style={{ textDecoration: 'none', color: 'white' }}>privacy</Link>
      </div>
      <div className="col-lg-3">
        <h1 className="get">Learn More</h1>
        <p className="para">Leonard’s Guide</p>
        <p className="para">Industry Net</p>
<p className="para">Camelot 3PL Software</p>
      
      </div>
     
      <div className="col-lg-3">
        <h1 className="get">
      <Link to="/Contact" style={{ textDecoration: 'none', color: 'white' }}>Contact with us</Link></h1>
      <div>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="book m-3" />
      </a>

      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="book m-3" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="book m-3" /> 
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="book m-3" /> 
      </a>
    </div>
      </div>
</div>
</div>
  <div className="head">
      <div className="info">
      </div>
      </div>
      <div className="conatiner-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
            ©Yoursitename 2023 | Nocimon, All Rights Reserved.
            </div>
            <div className="col-lg-4 ak d-flex gap-3 ">
  <span className="">Trams & Condition</span>
  <Link to="/privacy" style={{ textDecoration: 'none', color: 'white' }}>privacy</Link>
  <span className="">Contact Us</span>
</div>
</div>
</div>
</div>
</div>

    </footer>
    </>
  )
}
export default Footer;