
import '../styles/Second.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from "react";



function Second() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

   
  
  return (
    <>
    <h4 className="latest text-center pos">LATEST SERVICE</h4>
    <h2 className="logis text-center">Logistics Made Simple Transportation
Made Easy In Touch</h2>

<div className="container-fluid">
  <div className="container">
    <div className="row">
    <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <Card style={{ width: '100%' }} className="position-relative">
          <div className="image-container position-relative">
            <Card.Img variant="top" className="boat" src="https://cdn-icons-png.flaticon.com/128/1018/1018573.png" />
            <Link to="/services">
      <Button 
        className="arrow-button position-absolute" 
        variant="primary" 
        style={{ right: '10px', bottom: '10px' }}
      >
        →
      </Button>
      </Link>
          </div>
          <Card.Body data-aos="fade-up">
            <Card.Title className="swi">Swifi</Card.Title>
            <Card.Text className="kom">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Card.Text>
          </Card.Body>
        </Card>
      
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <Card style={{ width: '100%' }} className="position-relative">
          <div className="image-container position-relative">
            <Card.Img variant="top" className="boat" src="https://cdn-icons-png.flaticon.com/128/3063/3063456.png"/>
            <Link to="/services">
      <Button 
        className="arrow-button position-absolute" 
        variant="primary" 
        style={{ right: '10px', bottom: '10px' }}
      >
        →
      </Button>
      </Link>
          </div>
          <Card.Body data-aos="fade-up">
            <Card.Title className="swi">Cargo Xpress</Card.Title>
            <Card.Text className="kom">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>

      <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <Card style={{ width: '100%' }} className="position-relative">
          <div className="image-container position-relative">
            <Card.Img variant="top" className="boat" src="https://cdn-icons-png.flaticon.com/128/546/546456.png" />
            <Link to="/services">
      <Button 
        className="arrow-button position-absolute" 
        variant="primary" 
        style={{ right: '10px', bottom: '10px' }}
      >
        →
      </Button>
      </Link>
          </div>
          <Card.Body data-aos="fade-up">
            <Card.Title className="swi">Aero Freight</Card.Title>
            <Card.Text className="kom">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
</div>

  
    </>
  )
}
export default Second;