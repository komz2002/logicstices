import React from 'react'
import '../styles/Blog.css'
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Blog() {
  return (
    <div className="container-fluid news">
  <h4 className=" Unlock text-center">B L O G A N D N E W S</h4>
  <h2 className=" poten text-center">Unlocking the potential of logistics</h2>
  <div className="container">
    <div className="row">
      <div className="col-lg-8">
        <img 
          src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/blog/blog-one__img1.jpg"
          alt=""
        />
         <h3 className="manage">There Any Usage Restrictions Or Fair Usage</h3>
         <p className="long">It is a long established fact that a reader williljl being li distracted by the readable lil content of amjlk page ghjkl when looking at its layout. hjkafkab bhjagbuiasgb hjkhkl bkbfkjb nkjnaskfn kjbnksbf nklanfkn.</p>

         
          


      </div>
      <div className='col-lg-4 blog'>
        <div className="content-container">
          <img 
            src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/blog/blog-one__sidebar-box__img1.jpg" 
            alt="" 
            className="content-image"
          />
          <div className="content-data">
            <h4 className="manage">Logistics Management And Coordination</h4>
           
            <Link to="/services">
      <Button 
        className="arrow-buttonpn" 
        variant="primary" 
        style={{ right: '10px', bottom: '10px' }}
      >
        Read more
      </Button>
      </Link>


          </div>
       
        </div>
        <hr className="separator-line" />
        <div className="content-container">
          <img 
            src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/blog/blog-one__sidebar-box__img1.jpg" 
            alt="" 
            className="content-image"
          />
          <div className="content-data">
            <h4 className="manage">Upgrade Or DownGrade My Broadband Plan</h4>
            
            <Link to="/services">
      <Button 
        className="arrow-buttonpn" 
        variant="primary" 
        style={{ right: '10px', bottom: '10px' }}
      >
        Read more
      </Button>
      </Link>
        
          </div>
        </div>
        <hr className="separator-line" />
        <div className="content-container">
          <img 
            src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/blog/blog-one__sidebar-box__img1.jpg" 
            alt="" 
            className="content-image"
          />
          <div className="content-data">
            <h4 className="manage">Upgrade Or DownGrade My Broadband Plan</h4>
          
            <Link to="/services">
      <Button 
        className="arrow-buttonpn" 
        variant="primary" 
        style={{ right: '10px', bottom: '10px' }}
      >
        Read more
      </Button>
      </Link>

          </div>
        </div>
        <hr className="separator-line" />
      </div>
    </div>
  </div>
 





</div>
  )
}

export default Blog