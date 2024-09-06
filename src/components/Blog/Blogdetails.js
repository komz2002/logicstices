
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";
import "./Blog.css";
import { Nav } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

function Blog() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    
    <>
<div className="fimg">
  <h2 className="pro p-5">Blog Classic</h2>
  <div className="img-2">
    <div className="img-3"></div>
  </div>
</div>
<div className="container-fluid">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 col-md-12">
        <div className="img-zoom-container mb-4">
          <img
            src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/blog/blog-page1__img1.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="content-section p-3">
  <div className="web text-muted">#Web design Comments (05)</div>
  <p className="connect mt-3">
    Connecting the world through seamless transportation
  </p>
  <p className="aliq">
    Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere viverra.
    Aliquam eros justo, posuere loborti viverra laoreet matti ullamcorper.
  </p>
  <Nav.Link to="/Home" className="mt-2 d-flex justify-content-center justify-content-md-start">
  <Button variant="primary" className="read-more-btn">
    Read more
  </Button>
</Nav.Link>

</div>

        <div className="theme mt-5 img-zoom-container mb-4">
          <img
            src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/blog/blog-page1__img2.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="web">#Web design Comments (05)</div>
        <p className="connect mt-3">
          Connecting the world through seamless transportation
        </p>
        <p className="aliq">
          Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere
          viverra. Aliquam eros justo, posuere loborti viverra laoreet matti
          ullamcorper.
        </p>
        <Nav.Link to="/Home" className="mt-2 d-flex justify-content-center justify-content-md-start">
  <Button variant="primary" className="read-more-btn m-5">
    Read more
  </Button>
</Nav.Link>

        <div className="img-zoom-container mb-4 ">
          <img
            src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/blog/blog-page1__img3.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="web">#Web design Comments (05)</div>
        <p className="connect mt-3">
          Connecting the world through seamless transportation
        </p>
        <p className="aliq">
          Aliquam eros justo, posuere loborti viverra lao ullamcorper posuere
          viverra. Aliquam eros justo, posuere loborti viverra laoreet matti
          ullamcorper.
        </p>
        <Button className="tton" variant="warning">1</Button>{' '}
        <Button className="tton" variant="warning">2</Button>{' '}
        <Button className="tton" variant="warning">3</Button>{' '}
      </div>

      <div className="col-lg-4 col-md-12 "data-aos="fade-up">
        <div className="form border p-5 m-3 mb-5">
          <p className="put mt-5">Search</p>
          <form role="search">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search your blog here..."
                aria-label="Search blog"
              />
              <span className="input-group-text">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </form>
        </div>

        <div className="about border mt-5 mb-5 "data-aos="fade-up">
          <p className="me p-3 m-3">About Me</p>
          <center>
            <div className="img-zoom-container">
              <img
                src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/blog/blog-details-img7.jpg"
                alt=""
                className="img-fluid"
              />
            </div>
          </center>
          <h2 className="text-center">Stanio lainto smarle</h2>
          <p className="text-center">
            liquam eros justo, posuere loborti viverra ullamcorper posuere
            viverra. Aliquam eros justo, posuere.
          </p>
        </div>

        <div className="Cras mt-5 mb-5 "data-aos="fade-up">
          <ListGroup as="ol" numbered>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Business Advice</div>
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Web design</div>
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
            </ListGroup.Item>
            <ListGroup.Item
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">Development</div>
              </div>
              <Badge bg="primary" pill>
                14
              </Badge>
              
            </ListGroup.Item>
          </ListGroup>
        </div>

        <h3 className="get">Latest Blog</h3>
        <div className="asser border p-3 m-3 mb-5  "data-aos="fade-up">
          <div className="blog-data d-flex gap-3">
            <div className="img-zoom-container">
              <img
                src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/blog/blog-details-img8.jpg"
                alt="Blog"
                className="img-fluid"
              />
            </div>
            Jan 10,2022 We move with speed and precision
          </div>
          <div className="blog-data d-flex gap-3 mt-2  "data-aos="fade-up">
            <div className="img-zoom-container asset">
              <img
                src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/blog/blog-details-img9.jpg"
                alt="Blog"
                className="img-fluid"
              />
            </div>
            Jan 10,2022 Reliable transportation solutions for your business
          </div>
          <div className="blog-data d-flex gap-3 mt-2 "data-aos="fade-up">
            <div className="img-zoom-container">
              <img
                src="https://itcroctheme.com/nocimon/nocimon-html/assets/img/blog/blog-details-img10.jpg"
                alt="Blog"
                className="img-fluid"
              />
            </div>
            Jan 10,2022 A picture is worth a thousand words.
          </div>
        </div>
        <div className="blog-data mt-2 border text-center p-3 m-5 "data-aos="fade-up">
          <h4 className="rol">Archive</h4>
          <h5 className="ril">January 2021</h5>
          <h5 className="ril">February 2021</h5>
          <h5 className="ril">March 2021</h5>
          <h5 className="ril">April 2021</h5>
          <h5 className="ril">May 2021</h5>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Blog;
