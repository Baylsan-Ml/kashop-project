import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLAyout() {
  return (
    <>
    <Outlet />

    <div className='footer'>
        This is auth footer
    </div>
    </>
  )
}
