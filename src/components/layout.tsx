
import React from 'react'
import Header from '../sections/header'
import Footer from './footer'
import Navbar from './navbar'

function Layout({children}: {children: any}) {
  return (
    <>
      <Header></Header>
        {children}
      <Footer></Footer>
    </>
  )
}

export default Layout
