import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos';
import 'aos/dist/aos.css';

function Aboutus() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (

    


    <>
      <div className="fimg ">
        <h2 className="pro p-5">About us</h2>
        <div className="img-2">
          <div className="img-3"></div>
        </div>
      </div>

      <Container>
        <Row>
          <Col xs={12} md={6} lg={4} className="imgerrr" >
            <img
              src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/about/about-two__img1.jpg"
              alt=""
              className="img-fluid hover-effect" 
            />
          </Col>

          <Col xs={12} md={6} lg={4} className="image-section">
            <img
              src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/about/about-two__img2.jpg"
              alt=""
              className="img-fluid hover-effect" 
            />
            <img
              src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/about/about-two__img3.jpg"
              alt=""
              className="img-fluid hover-effect" 
            />
          </Col>

          <Col xs={12} md={12} lg={4} className="text-section">
            <h2 className="mile">Delivering efficiency one mile at a time</h2>
            <p className="layout">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <Container>
              <Row>
                <Col
                  xs={12}
                  md={6}
                  lg={6}
                  className="d-flex flex-column align-items-center mb-4"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/8186/8186102.png"
                    alt="Icon"
                    className="icon-size mb-2"
                  />
                  <p className="tine">RealTimeLogistics</p>
                  <hr className="divider" />
                </Col>

                <Col
                  xs={12}
                  md={6}
                  lg={6}
                  className="d-flex flex-column align-items-center mb-4"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png"
                    alt="Icon"
                    className="icon-size mb-2"
                  />
                  <p className="tine">OnPoint</p>
                  <hr className="divider" />
                </Col>

                <Col
                  xs={12}
                  md={6}
                  lg={6}
                  className="d-flex align-items-center mb-4"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828643.png"
                    alt="Icon"
                    className="icon-size me-2"
                  />
                  <p className="mb-0 dolor">
                    Mistakes To Avoid Lorem ipsum dolor sit amet
                  </p>
                  
                </Col>

                <Col
                  xs={12}
                  md={6}
                  lg={6}
                  className="d-flex align-items-center mb-4"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828643.png"
                    alt="Icon"
                    className="icon-size me-2"
                  />
                  <p className="mb-0 dolor">
                    Mistakes To Avoid Lorem ipsum dolor sit amet
                  </p>
                 
                </Col>

                <Col
                  xs={12}
                  md={6}
                  lg={6}
                  className="d-flex align-items-center mb-4"
                >
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/1828/1828643.png"
                    alt="Icon"
                    className="icon-size me-2 mt-4"
                  />
                  <p className="mb-0 dolor">
                    Mistakes To Avoid Lorem ipsum dolor sit amet
                  </p>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col>
            <h4 className="easy">who we are</h4>
            <p className="made">Logistics made transportation made easy Design</p>
            <p className="reader">
              It is a long established fact that a reader will be distracted by
              the readablejk content of a page when looking at its layout. Lorem
              Ipsum is simply dummyjl text of the printing and typesetting
              industry
            </p>
          </Col>
          <Col xs={12} md={6} lg={6} className="theme">
            <img
              src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/resource/who-we-are-one__img1.jpg"
              className="img-fluid hover-effect" 
              alt=""
            />
          </Col>
        </Row>
      </Container>
    
      <div className="marquee-container">
        <div className="marquee-left">
          <h4>
            RapidFleet DriveLogistics Realk
            <img
              className="el"
              src="https://cdn-icons-png.flaticon.com/128/929/929495.png"
              alt=""
            />
            DriveLogistics Logitruck Logitruck
            <img
              className="el"
              src="https://cdn-icons-png.flaticon.com/128/929/929495.png"
              alt=""
            />
            RealTimeLogistics Ou
            <img
              className="el"
              src="https://cdn-icons-png.flaticon.com/128/929/929495.png"
              alt=""
            />
            RapidFleet DriveLogistics Realk
          </h4>
        </div>
        <div className="marquee-right mt-3">
          <h4>
            RapidFleet DriveLogistics Realk
            <img
              className="el"
              src="https://cdn-icons-png.flaticon.com/128/929/929495.png"
              alt=""
            />
            DriveLogistics Logitruck Logitruck
            <img
              className="el"
              src="https://cdn-icons-png.flaticon.com/128/929/929495.png"
              alt=""
            />
            RealTimeLogistics Ou
            <img
              className="el"
              src="https://cdn-icons-png.flaticon.com/128/929/929495.png"
              alt=""
            />
            RapidFleet DriveLogistics Realk
          </h4>
        </div>
      </div>
      <div className="container-fluid">
        <h4 className="test text-center">Testomonial</h4>
        <h2 className="Navi text-center">
          Navigating your supply chain with precision
        </h2>
        <div className="container">
          <div className="row">
            <div className="car_brand">
              <Slider {...settings}>
                <div className="brand-logo d-flex flex-column flex-md-row align-items-start justify-content-start lang">
                  <img
                    src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/testimonial/testimonials-two__img2.jpg"
                    alt="car logo"
                    className="img-fluid mb-3 mb-md-0"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <p className="text-justify ml-md-3">
                    Though not required by the orthographic conventions of any
                    language with a writing system, paragraphs are a
                    conventional means of organizing extended segments of prose.
                  </p>
                </div>

                <div className="brand-logo d-flex flex-column flex-md-row align-items-start justify-content-start lang">
                  <img
                    src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/testimonial/testimonials-two__img2.jpg"
                    alt="car logo"
                    className="img-fluid mb-3 mb-md-0"
                    style={{ maxWidth: "100%", height: "auto" }}
                  />
                  <p className="text-justify ml-md-3">
                    Though not required by the orthographic conventions of any
                    language with a writing system, paragraphs are a
                    conventional means of organizing extended segments of prose.
                  </p>
                </div>
              </Slider>
            </div>
            <div className="container-fluid bxe mt-4">
              <div className="container aa">
                <div className="row">
                  <div className="col-lg-8 col-md-12 mb-4">
                    <div className="sol">Logistics Solutions for Success</div>
                    <div className="Lor">
                      Lorem Ipsum is simply dummy text of the printing
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 mb-4">
                    <a href="/contact">
                      <button type="button" className="btn btn-light w-100">
                        Contact Us
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Aboutus;
