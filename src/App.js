import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Herosection from "./components/home/Herosection";
import Services from "./components/Services/Services.js";
import Contact from "./components/Contact/Contact.js";
import Product from './components/Products/Product'; 
import Blog from './components/Blog/Blog'; 

import "@fortawesome/fontawesome-free/css/all.min.css";
import Aboutus from "./components/About/Aboutus.js";
import Testimonials from "./components/Testimonials/Testimonials.js";
import Faqs from "./components/Testimonials/Faqs.js";
import Blogdetails from "./components/Blog/Blogdetails";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Herosection />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="projects" element={<Product />} />
           <Route path="Services" element={<Services/>} />
           <Route path="Testimonials" element={<Testimonials/>} />
           <Route path="Faq's" element={<Faqs/>} />
           <Route path="OurBlog" element={<Blog/>} />
           <Route path="Blogdetails"element={<Blogdetails/>}/>
        </Route>
      </Routes>
    </Router>
  );
}
