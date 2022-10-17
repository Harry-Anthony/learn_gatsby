import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import * as protectionStyles from '../assets/css/protection.module.css'
import { RoundedButton } from '../components/button'
import { H1, H2, PRegular } from '../components/text'

const styles = {
    marginLeft: '32px'
}

function Protection() {
  return (
    <>
    <div className={protectionStyles.container}>
      <div className={protectionStyles.protectionCard}>
        <H2>Easy Advance Protection</H2>
        <PRegular>Use marketing automation to identify hot leads and email your sales team telling them to follow up. Nurture and contact leads at the opportune time to maximize.</PRegular>
        <RoundedButton className={protectionStyles.button}>Read more</RoundedButton>
      </div>
      <div>
        <StaticImage width={620} src="../assets/img/protection.png" alt='' />
      </div>
    </div>
    <div className={protectionStyles.container}>
      <div>
        <StaticImage width={620} src="../assets/img/protection.png" alt='' />
      </div>
      <div style={styles} className={protectionStyles.protectionCard}>
        <H2>Easy Advance Protection</H2>
        <PRegular>Use marketing automation to identify hot leads and email your sales team telling them to follow up. Nurture and contact leads at the opportune time to maximize.</PRegular>
        <RoundedButton className={protectionStyles.button}>Read more</RoundedButton>
      </div>
    </div>
    </>
  )
}

export default Protection
