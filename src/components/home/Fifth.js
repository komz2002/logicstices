import React from 'react';
import '../styles/Fifth.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Fifth() {


  
  return (
    <>
      <div className="container-fluid new">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <p className="font-weight-bold our">OUR LATEST WORK</p>
              <p className="font-weight-bold eff">Efficient Solutions Logistics Needs</p>
              <p className="esta">It is a long established fact that a reader will be distracted by the content of a page when looking at its layout. Lorem Ipsum is simply text of the printing</p>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="image-wrapper">
                <img 
                  src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/project/project-one__img1.jpg"
                  className="img-fluid hover-effect"
                  alt="Project 1"
                />
              </div>
              <div className="press">Express Logix</div>
              <p className="isl">Lorem Ipsum isly dummy text of the printing Ipsum is simple</p>
              <Link to="/Contact">
      <Button 
        className="arrow-buttonp" 
        variant="primary" 
        style={{ right: '8px', bottom: '8px' }}
      >
      Read more
      </Button>
      </Link>
     
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="image-wrapper">
                <img 
                  src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/project/project-one__img2.jpg"
                  className="img-fluid hover-effect"
                  alt="Project 2 About Us"
                />
              </div>
              <div className="Ex">Prime Cargo</div>
              <p className="isl">Lorem Ipsum isly dummy text of the printing Ipsum is simple</p>
              <Link to="/Contact">
      <Button 
        className="arrow-buttonp" 
        variant="primary" 
        style={{ right: '8px', bottom: '8px' }}
      >
      Read more
      </Button>
      </Link>
     
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="image-wrapper">
                <img 
                  src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/project/project-one__img3.jpg"
                  className="img-fluid hover-effect"
                  alt="Project 3"
                />
              </div>
              <div className="Ex">Express Logix</div>
              <p className="isl">Lorem Ipsum isly dummy text of the printing Ipsum is simple</p>
              <Link to="/Contact">
      <Button 
        className="arrow-buttonp" 
        variant="primary" 
        style={{ right: '8px', bottom: '8px' }}
      >
      Read more
      </Button>
      </Link>
     
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="image-wrapper">
                <img 
                  src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/project/project-one__img4.jpg"
                  className="img-fluid hover-effect"
                  alt="Project 4"
                />
              </div>
              <div className="Ex">Prime Cargo</div>
              <p className="isl">Lorem Ipsum isly dummy text of the printing Ipsum is simple</p>
              <Link to="/Contact">
      <Button 
        className="arrow-buttonp" 
        variant="primary" 
        style={{ right: '8px', bottom: '8px' }}
      >
      Read more
      </Button>
      </Link>
     
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fifth;
