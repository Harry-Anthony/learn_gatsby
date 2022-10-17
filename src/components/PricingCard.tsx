import React from 'react'
import { RoundedButton } from './button'
import { H4, H5, PRegular } from './text';
import * as pricingStyles from '../assets/css/pricing.module.css'

function PricingCard() {
    return (
        <div className={pricingStyles.card}>
            <div className={pricingStyles.cardHeader}>
                <H5>Basic plan</H5>
                <H4>$19/mo</H4>
                <PRegular>or $199 yearly</PRegular>
            </div>
            <div className={pricingStyles.cardBody}>
                <PricingListItem title="Unlimited members" />
                <PricingListItem title="Unlimited members" />
                <PricingListItem title="Unlimited members" />
                <PricingListItem title="Unlimited members" />
            </div>
            <RoundedButton className={pricingStyles.cardFooter}>
                Get started'
            </RoundedButton>
        </div>
    )
}

function PricingListItem({ title }: { title: string }) {
    return (
        <div className={pricingStyles.listItem}>
            <span>&#10004;</span>
            <PRegular className={pricingStyles.listItemTitle}>{title}</PRegular>
        </div>
    )
}


export default PricingCard;


