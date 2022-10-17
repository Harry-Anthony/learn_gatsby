import React from 'react'
import { Button } from '../components/button'
import { H1, H2, PRegular } from '../components/text'

function FormEmail() {
    return (
        <div className='section section-email'>
            <H2>Get started a 15-days free trial</H2>
            <PRegular><br />Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</PRegular>
            <form className='row form-email'>
                <input className='input-mail' type="email" name="email" id="" placeholder='Enter your email' />
                <Button>Sign Up</Button>
            </form>
            <PRegular>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</PRegular>
        </div>
    )
}

export default FormEmail
