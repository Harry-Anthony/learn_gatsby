import React from 'react'
import SoftwareCard from '../components/SoftwareCard'
import { H2, PRegular } from '../components/text'
import * as softwareStyles from '../assets/css/software.module.css'; 
function Software() {
  return (
    <div className={softwareStyles.container}>
      <div className={softwareStyles.titleContainer}>
        <H2>
            Software Solutions that Fit Your Needs
        </H2>
        <PRegular className={softwareStyles.subtitle}>The features to boost your productivity</PRegular>
      </div>
      <div className={softwareStyles.cardContainer}>
        <SoftwareCard />
        <SoftwareCard />
        <SoftwareCard />
      </div>
    </div>
  )
}
 
export default Software
