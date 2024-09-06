import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/brand.css';

const Brand = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
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
   <div className="container">
   <div>
      <div className="brand-heading">
        <h3 className="brand_h1">our team members</h3>
        <h4 className="brand_h2">Your partner in seamless
        transportation</h4>
      </div>
      <div className="car_brand">
        <Slider {...settings}>
          <div className="brand-logo">
            <img src = "https://itcroctheme.com/nocimon/nocimon-html/assets/img/team/team-1-2.png" alt="car logo" />
            <h4 className="nel">nelkas grud</h4>
          </div>
          <div className="brand-logo">
            <img src = "https://itcroctheme.com/nocimon/nocimon-html/assets/img/team/team-1-1.png" alt="car logo" />
            <h4 className="nel">jubain nakid</h4>
          </div>
          <div className="brand-logo">
            <img src = "https://itcroctheme.com/nocimon/nocimon-html/assets/img/team/team-1-3.png" alt="car logo" />
            <h4 className="nel">asmita sain</h4>
          </div>
          <div className="brand-logo">
            <img src = "https://itcroctheme.com/nocimon/nocimon-html/assets/img/team/team-1-2.png" alt="car logo" />
            <h4 className="nel">bardin dao</h4>
          </div>
          <div className="brand-logo">
            <img src = "https://itcroctheme.com/nocimon/nocimon-html/assets/img/team/team-1-3.png" alt="car logo" />
            <h4 className="nel">calzamio nullep</h4>
          </div>
        </Slider>
      </div>
    </div>
   </div>
    </>
  );
};
export default Brand;