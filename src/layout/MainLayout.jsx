import React, { useState } from 'react'
import Navbar from '../components/navbar/Navbar.jsx'
import Footer from '../components/footer/Footer.jsx'
import { Outlet } from 'react-router-dom'
import { Container } from '@mui/material'

export default function MainLayout() {
    
  return (
    <>
      <Navbar />
      {/* container */}  
        <Outlet />
      <Footer />
    </>
  )
}
