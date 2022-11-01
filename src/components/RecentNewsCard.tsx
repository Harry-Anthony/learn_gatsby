import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import * as newStyles from '../assets/css/new.module.css'
import { PRegular, H5 } from './text'

const textInfoStyle = {
  marginRight: "10px",
  fontSize: "13px"
}

const paragraphe = {
  fontSize: '15px'
}

const title = {
  margin: "10px 0px"
}

const readMore = {
  marginRight: "10px",
  color: "#FF007A"
}

function RecentNewsCard({cardTitle}: {cardTitle: string}) {
  return (
    <div className={newStyles.card}>
      <div className={newStyles.cardHeader}>
        <StaticImage src='../assets/img/pcImage.png' alt='pc'/>
      </div>
      <div className={newStyles.cardBody}>
        <div className={newStyles.cardInfo}>
          <PRegular style={textInfoStyle} >Social media</PRegular>
          <PRegular style={textInfoStyle}>5 min read</PRegular>
        </div>
        <H5 style={title}>{cardTitle}</H5>
        <PRegular style={paragraphe}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
        </PRegular>
        <div className={newStyles.cardBottom}>
          <span style={readMore}>Read more</span>
          <span>{'>'}</span>
        </div>
      </div>
    </div>
  )
}

export default RecentNewsCard
