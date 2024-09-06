import React, { useState } from 'react';
import '../styles/Contact.css';
import 'bootstrap/dist/css/bootstrap.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required';
    if (!email.trim()) newErrors.email = 'Email is required';
    if (!message.trim()) newErrors.message = 'Message is required';
    if (email && !/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log({ name, email, message });
    alert(name, email, message);

    setName('');
    setEmail('');
    setMessage('');
    setErrors({});
  };

  return (
    <>
      <div className="fimg">
        <h2 className="pro p-5">Blog Detail</h2>
        <div className="img-2">
          <div className="img-3"></div>
        </div>
      </div>

      <div className="container-fluid mt-5">
        <h4 className="text-center us">Contact Us</h4>
        <h2 className="text-center et">Get in Touch With Us</h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <h2 className="text-center add">Address</h2>
              <div className="blog-data d-flex gap-3 log">
                <img src="https://cdn-icons-png.flaticon.com/128/14025/14025691.png" alt="Blog" className="blog-image" />
                <p className="sent text-center">Dhaka 102, 8000 sent behaibior utl 1216, road 45 house of street</p>
              </div>
              <h2 className="text-center add">Let's Talk</h2>
              <div className="blog-data d-flex gap-3 mt-2 log">
                <img src="https://cdn-icons-png.flaticon.com/128/724/724664.png" alt="Blog" className="blog-image" />
                <p className="sent text-center"> +32566 - 800 - 890</p>
           
              </div>
              <h2 className="text-center add">Send Us Email</h2>
              <div className="blog-data d-flex gap-3 mt-2 log">
                <img src="https://cdn-icons-png.flaticon.com/128/9068/9068642.png" alt="Blog" className="blog-image" />
                <p className="sen text-center">demo0023yourmailmail.com</p>
                
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    placeholder="Your Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  {errors.message && <span className="error">{errors.message}</span>}
                </div>
                <button type="submit" className="submit-btn">
                  SUBMIT NOW
                </button>
              </form>
            </div>
            <div className="col-lg-3 d-none d-lg-block vertical-layout">
  <div className="vertical-line"></div> {/* First vertical line */}
  <div className="image-container insta d-flex flex-column align-items-center justify-content-center">
    <img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="Instagram" className="social-icon mb-2" />
    <img src="https://cdn-icons-png.flaticon.com/128/145/145802.png" alt="Facebook" className="social-icon mb-2" />
    <img src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png" alt="Twitter" className="social-icon mb-2" />
  </div>
  <div className="vertical-line"></div> {/* Second vertical line */}
</div>



          </div>
        </div>
      </div>

      <div className="container-fluid mt-4">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512910.5935442415!2d76.6828142!3d30.702182500000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fefcc123f8207%3A0x236180065fd9e874!2sOffice%20Furniture%20Studio!5e0!3m2!1sen!2sin!4v1724960557387!5m2!1sen!2sin"
          width="100%"
          height="500px"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
        ></iframe>
      </div>
      <div className="container-fluid bxe mt-4">
        <div className="container aa">
          <div className="row">
            <div className="col-lg-8 col-md-12 mb-4">
              <div className="sol">Logistics Solutions for Success</div>
              <div className="Lor">Lorem Ipsum is simply dummy text of the printing</div>
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
};

export default Contact;
