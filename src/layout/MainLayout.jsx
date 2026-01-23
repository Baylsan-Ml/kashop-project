import React, { useEffect, useState } from 'react'
import Navbar from '../components/navbar/Navbar.jsx'
import Footer from '../components/footer/Footer.jsx'
import { Outlet, useLocation } from 'react-router-dom'

export default function MainLayout() {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
    
  return (
    <>
      <Navbar />
      {/* container */}  
        <Outlet />
      <Footer />
    </>
  )
}
