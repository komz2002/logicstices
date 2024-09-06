import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer/Footer'; 
import Scrolldown from './scrolldown/Scrolldown';


function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
      <Scrolldown/>
    </>
  );
}
export default Layout;
