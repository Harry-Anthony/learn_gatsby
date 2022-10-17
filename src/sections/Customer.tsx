import React from 'react'
import CustomerCard from '../components/CustomerCard'
import { H2, PRegular } from '../components/text'
import * as customerStyles from '../assets/css/customer.module.css';

function Customer() {
    return (
        <div className={customerStyles.container}>
            <div className='title-container'>
                <H2>
                    Software Solutions that Fit Your Needs
                </H2>
                <PRegular className='subtitle'>
                    The features to boost your productivity
                </PRegular>
            </div>
            <div className={customerStyles.contentCard}>
                <CustomerCard />
                <CustomerCard />
                <CustomerCard />
            </div>
        </div>
    )
}

export default Customer
