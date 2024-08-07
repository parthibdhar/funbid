'use client'
import React from 'react'
import NavBar from '../navBar/NavBar'
import Footer from '../footer/Footer'
type LayoutProps = {
  children: React.ReactNode
}
const Layout: React.FC<LayoutProps> = ({  children }) => {
    // console.log("layout: " , children)
  return (
    
    <div className="main">
        <NavBar />
        { children }
        <Footer/>
    </div>
    
  )
}

export default Layout