import React from 'react'
import {Button} from './Button.js'
import './Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
        <section classname='footer-subscription'>
            <p className='footer-subscription-heading'>
                Join the adventure newsletter to recieve our best vacation deals
            </p>
            <p className='footer-subscription-text'>
                You can unsubscribe at any time
            </p>
            <div className='input-areas'>
                <form> <input type='email' name='email' placeholder='Your email' className='footer-input'/>
                <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className='footer-links'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/'>Testimonials</Link>
                    <Link to='/'>Careers</Link>
                    <Link to='/'>Investors</Link>
                    <Link to='/'>Terms of Services</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media wrap'>
                <div className='footer-logo'>
                    <Link to='/' className='social-logo'>
                        HUMRAHE
                        <svg className="logo-icon" xmlns="http://www.w3.org/2000/svg" height='30px' width='30px' viewBox="0 0 384 512">
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                        </svg>
                    </Link>
                </div>
                <small className='website-rights'>HUMRAHE @ 2024</small>
                <div className='social-icons'>
                    <Link to='/' target='_blank' aria-label='Facebook' className='social-icon-link facebook'>
                        {/* facebook image goes here */}
                    </Link>
                    <Link to='/' target='_blank' aria-label='Instagram' className='social-icon-link instagram'>
                        {/* facebook image goes here */}
                    </Link>
                    <Link to='/' target='_blank' aria-label='LinkedIn' className='social-icon-link linkedin'>
                        {/* facebook image goes here */}
                    </Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer