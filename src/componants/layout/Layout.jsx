import React from 'react'
import Navbar from '../navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../footer/footer'
export default function Layout() {
  return <>
      <Navbar />
      <div className='mt-10 min-h-screen'>
        <Outlet/>
      </div>
      
      <Footer/>
  </> 

  
}
