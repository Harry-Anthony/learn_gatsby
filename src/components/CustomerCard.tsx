import React from 'react'
import * as customerStyles from '../assets/css/customer.module.css'
import { H5, PRegular } from './text'

function CustomerCard() {
  return (
    <div className={customerStyles.cardContainer}>
      <div>stars</div>
      <div className={customerStyles.pContainer}>
        <PRegular>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</PRegular>
      </div>
      <div className={customerStyles.footerCard}>
        <div className={customerStyles.avatar}></div>
        <div>
            <H5>Brooklyn Simmons</H5>
            <PRegular>Bank of America</PRegular>
        </div>
      </div>
    </div>
  )
}

export default CustomerCard
