import React from 'react'
import * as newStyles from '../assets/css/new.module.css'
import { RoundedButton } from '../components/button'
import RecentNewsCard from '../components/RecentNewsCard'
import { H2, PRegular } from '../components/text'

function RecentNews() {
  return (
    <div className={newStyles.container}>
      <div>
        <div className={newStyles.header}>
          <div>
            <H2>Recent News</H2>
            <PRegular>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</PRegular>
          </div>
          <RoundedButton>View all</RoundedButton>
        </div>
        <div className={newStyles.cardContainer}>
          <RecentNewsCard cardTitle={'Our Favorite Productive Thing Is SaaSup'} />
          <RecentNewsCard cardTitle={'Young Startups With SaaSup In Full Throttle'} />
          <RecentNewsCard cardTitle={'The perfect integration for all real time a reality services'} />
        </div>
      </div>
    </div>
  )
}

export default RecentNews
