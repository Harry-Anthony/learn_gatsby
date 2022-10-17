import React from 'react'
import { RoundedButton } from './button'
import * as navbarstyles from '../assets/css/navbar.module.css'
import { StaticImage } from "gatsby-plugin-image"

function Navbar() {
  return (
    <div className={navbarstyles.container}>
      <div>
        <StaticImage src="../assets/img/Logo.png" alt='logo'/>
      </div>
      <nav className={navbarstyles.nav}>
        <ul className={navbarstyles.ul}>
            <li className={navbarstyles.li}><a className={navbarstyles.a} href="#">Home</a></li>
            <li className={navbarstyles.li}><a className={navbarstyles.a} href="#">About Us</a></li>
            <li className={navbarstyles.li}><a className={navbarstyles.a} href="#">Princing</a></li>
            <li className={navbarstyles.li}><a className={navbarstyles.a} href="#">Contact Us</a></li>
        </ul>
        <RoundedButton className={navbarstyles.roundedButton}>Contact Us</RoundedButton>
      </nav>
    </div>
  )
}

export default Navbar



