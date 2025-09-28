import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './components/react-router/Footer/Footer.jsx'
import Header from './components/react-router/Header/Header.jsx' 


function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout