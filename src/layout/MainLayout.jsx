import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar.jsx'
import Footer from '../components/footer/Footer.jsx'
import { Outlet, useLocation } from 'react-router-dom'
import NavbarNoOne from '../components/navbar/NavbarNoOne.jsx';

export default function MainLayout() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    
  return (
    <>
    <NavbarNoOne />
      <Navbar />
      {/* container */}  
        <Outlet />
      <Footer />
    </>
  )
}
