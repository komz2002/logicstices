import React from "react";
import "./Services.css";
import { CiDeliveryTruck } from "react-icons/ci";
import { MdFactory } from "react-icons/md";
import { BsBuildingSlash } from "react-icons/bs";
import Accordion from "react-bootstrap/Accordion";

function Services() {
  return (
    <>
      <div className="fimg">
        <h2 className="pro p-5">Services</h2>
        <div className="img-2">
          <div className="img-3"></div>
        </div>
      </div>

      <div className="container kom">
        <h4 className="made">LATEST SERVICE</h4>
        <h2 className="mad">Logistics made simple, transportation made easy</h2>
        <div className="service d-lg-flex d-md-flex d-sm-flex">
          <div className="container service">
            <div
              className="card"
              style={{ width: "20rem", position: "relative" }}
            >
              <img
                src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/service/service-three__img1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body-overlay-half">
                <p className="card-text">
                  <CiDeliveryTruck className="truck" />
                  <p className="dum">Express Transport</p>
                  <hr />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div className="container service">
            <div
              className="card"
              style={{ width: "20rem", position: "relative" }}
            >
              <img
                src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/service/service-three__img3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body-overlay-half">
                <p className="card-text">
                  <MdFactory className="truck" />
                  <p className="dum">Aero Logix</p>
                  <hr />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div className="container service">
            <div
              className="card"
              style={{ width: "20rem", position: "relative" }}
            >
              <img
                src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/service/service-three__img2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body-overlay-half">
                <p className="card-text">
                  <BsBuildingSlash className="truck" />

                  <p className="dum">Speedy Transit</p>
                  <hr />

                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="service d-lg-flex d-md-flex d-sm-flex">
          <div className="container service">
            <div
              className="card"
              style={{ width: "20rem", position: "relative" }}
            >
              <img
                src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/service/service-three__img1.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body-overlay-half">
                <p className="card-text">
                  <CiDeliveryTruck className="truck" />
                  <p className="dum">Express Transport</p>
                  <hr />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="container service">
            <div
              className="card"
              style={{ width: "20rem", position: "relative" }}
            >
              <img
                src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/service/service-three__img3.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body-overlay-half">
                <p className="card-text">
                  <MdFactory className="truck" />
                  <p className="dum">Aero Logix</p>
                  <hr />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </p>
              </div>
            </div>
          </div>
          <div className="container service">
            <div
              className="card"
              style={{ width: "20rem", position: "relative" }}
            >
              <img
                src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/service/service-three__img2.jpg"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body-overlay-half">
                <p className="card-text">
                  <BsBuildingSlash className="truck" />
                  <p className="dum">Speedy Transit</p>
                  <hr />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid ask">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h4 className="ask">ASK QUESTION</h4>
              <h2 className="cloud">Delivering BeyondExpectations</h2>
              <p className="com">
                Cloud computing is a model for delivering on-demand computing
                resources over the internet. It can benefit your hklli business
                by providing flex
              </p>
            </div>
            <div className="col-md-8">
              <div className="accord">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="accordion">
                      <h4>What is an invoice?</h4>
                    </Accordion.Header>
                    <Accordion.Body className="accordian_p">
                      Invoicing software by Vyapar is considered to be the best
                      invoicing software because of its feature rich, easy to
                      use interface.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="accordion">
                      <h4>Which is the best invoicing software for SMEs?</h4>
                    </Accordion.Header>
                    <Accordion.Body className="accordian_p">
                      You can download accounting software by Vyapar on your
                      Android mobile phone and Windows PC. Vyapar accounting
                      software for SMEs can be downloaded from our website. You
                      can also download the Vyapar Android app from Google
                      Playstore.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="accordion">
                      <h4>
                        How to use Vyapar small business accounting software?
                      </h4>
                    </Accordion.Header>
                    <Accordion.Body className="accordian_p">
                      Vyapar invoicing and accounting software for SMEs can be
                      used by retailers, wholesalers, service providers,
                      distributors, and manufacturers.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                    
              </div>
            </div>
          </div>
        </div>
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
            <div className="col-lg-4 col-md-12 mb-4">
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
  );
}

export default Services;
