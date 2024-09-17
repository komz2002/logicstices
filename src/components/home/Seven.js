import React from 'react';
import '../styles/Seven.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlane } from '@fortawesome/free-solid-svg-icons';




function Seven() {
  return (
        <>
       <div className="container-fluid">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 mb-4 cris">
        <div className="box d-flex flex-column align-items-start p-3">
          <img 
            src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/testimonial/testimonials-one__img2.jpg"
            alt="Savaandya Khan"
            className="img-fluid rounded-circle mb-3"
            style={{ width: '80px', height: '80px' }} 
          />
          <p className="name mb-2">
            Savaandya Khan
          </p>
        
          <p className="movie">
            They provide a quick and accessible way for consumers to assess something before making a decision. Whether it's a five-star review for a movie, a product rating on an e-commerce site, or customer feedback for a service, ratings reflect collective opinions and experiences.
          </p>
        </div>
      </div> 

      <div className="col-lg-6 mb-4 cris">
        <div className="box d-flex flex-column align-items-start p-3">
          <img 
            src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/testimonial/testimonials-one__img1.jpg"
            alt="Cristin Dcurz"
            className="img-fluid rounded-circle mb-3"
            style={{ width: '80px', height: '80px' }} 
          />
          <p className="name mb-2">
            Cristin Dcurz
          </p>
         
          <p className="movie">
            They provide a quick and accessible way for consumers to assess something before making a decision. Whether it's a five-star review for a movie, a product rating on an e-commerce site, or customer feedback for a service, ratings reflect collective opinions and experiences.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
<div className="container-fluid bx">
  <div className="container aa">
    <div className="row">
      <div className="col-lg-6 col-md-12 mb-4">
        <div className="sol m-1">Logistics Solutions for Success</div>
        <div className="Lor">Lorem Ipsum is simply dummy text of the printing</div>
      </div>
      <div className="col-lg-6 col-md-12">
        <div className="form-box p-4">
          <form>
            <div className="d-flex flex-column flex-sm-row mb-3 bg-white align-items-center ebox">
              <input 
                type="email" 
                id="email" 
                className="bg-transparent outline-none field flex-grow-1 border-0 p-2 mb-3 mb-sm-0" 
                placeholder="Your Email"
                required 
              />
              <button type="button" className="btn btn-secondary ms-sm-3 px-4 py-2 dary">
                <FontAwesomeIcon icon={faPlane} className="me-2" />
                Browse More
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

</>
  )
}
export default Seven;
    

