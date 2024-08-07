'use client'
import React, { ReactNode } from 'react'
import NavBar from '../navBar/NavBar'
import Footer from '../footer/Footer'

interface LayoutProps {
  children: ReactNode;
}
const Layout:React.FC<LayoutProps> = ({  children }) => {
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