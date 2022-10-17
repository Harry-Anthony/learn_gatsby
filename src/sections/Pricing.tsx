import React from 'react'
import * as pricingStyles from '../assets/css/pricing.module.css';
import PricingCard from '../components/PricingCard';
import { H2, PRegular } from '../components/text';

function Pricing() {
  return (
    <div className={pricingStyles.container}>
      <div className='title-container'>
        <H2>
            Software Solutions that Fit Your Needs
        </H2>
        <PRegular className='subtitle'>
            The features to boost your productivity
        </PRegular>
      </div>
      <div className={pricingStyles.cardContainer}>
        <PricingCard />
        <PricingCard />
        <PricingCard />
      </div>
    </div>
  )
}

export default Pricing
