import React from 'react'
import * as headerStyles from '../assets/css/header.module.css'
import { Button, RoundedButton } from '../components/button'
import Navbar from '../components/navbar'
import { H1, PRegular } from '../components/text'
import { StaticImage } from "gatsby-plugin-image"

function Header() {
  return (
    <div className={headerStyles.container}>
      <Navbar></Navbar>
      <div className={headerStyles.headerCard}>
        <H1 className={headerStyles.title}>
          Your digital business is in good hands with us!
        </H1>
        <PRegular className={headerStyles.subtitle}>
          Make your work easier with an integrated ecosystem that lets all departments work properly together.
        </PRegular>
      </div>
      <div className={headerStyles.buttonContainer}>
        <Button className={headerStyles.button}>Get started</Button>
        <RoundedButton className={headerStyles.roundedButton}>
          <span className={headerStyles.roundedButtonText}>Watch video</span>
          <StaticImage src="../assets/img/play.png" alt="" />
        </RoundedButton>
      </div>
    </div>
  )
}

export default Header
