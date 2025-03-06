import React from 'react'
import './Footer.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
            <h1>For Further Query</h1>
            <img src={theme_pattern} alt="" />
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user_icon} alt=""/>
                    <input type="email" placeholder='Enter your email' />
                
                </div>
                <div className="footer-subscribe">Send </div>
            </div>
        </div>
        <hr  />
        <div className="footer-buttom">
            <p className="footer-buttom-left"> © 2025 Payel Chatterjee. All rights reserved</p>
             <div className="footer-buttom-right">
                <p>Privacy Policy</p>
                <p>Connect with me</p>
             </div>
        </div>
    </div>
  )
}

export default Footer