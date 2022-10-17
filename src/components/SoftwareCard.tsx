import React from 'react'
import { H3, PMedium, PRegular } from './text'
import * as softwareStyles from '../assets/css/software.module.css'
import { StaticImage } from 'gatsby-plugin-image'


function SoftwareCard() {
  return (
    <div className={softwareStyles.card}>
        <StaticImage src='../assets/img/cardImage.png' alt='management' />
        <H3>Task Management</H3>
        <PRegular className={softwareStyles.description}>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
        </PRegular>
        <PMedium className={softwareStyles.textButton}>
            View More
        </PMedium>
    </div>
  )
}

export default SoftwareCard
