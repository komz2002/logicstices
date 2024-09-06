import React, { useEffect } from "react";
import "../styles/Home.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Aos from "aos";
import "aos/dist/aos.css";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-content mb-4 mb-md-0 touch "data-aos="fade-right">
            <div className="smart">Smart Solutions</div>
            <h1 className="stream">
              Streamlined transportation for a better tomorrow
            </h1>
            <div className="we">
              We have been operating for over a decade, providing top-notch
              services.
            </div>
            <Link to="/Projects">
              <Button
                className="arrow"
                variant="primary"
                style={{ right: "10px", bottom: "10px" }}
              >
                Get in Tounch
              </Button>
            </Link>
          </div>

          <div className="col-md-6 position-relative image-content  "data-aos="fade-left">
            <img
              src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/slider/banner-one__mian-img.jpg"
              alt="Banner"
              className="img-fluid main-banner-img"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
