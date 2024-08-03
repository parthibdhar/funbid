'use client'
import React from 'react'
import NavBar from '../navBar/NavBar'
import Footer from '../footer/Footer'

const Layout = ({  children }) => {
    console.log("layout: " , children)
  return (
    
    <div className="main">
        <NavBar />
        { children }
        <Footer/>
    </div>
    
  )
}

export default Layout