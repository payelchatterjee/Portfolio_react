import React from 'react'
import './Hero.css'
import payel from '../../assets/payel.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='home' className='hero' >
            <img src={payel} alt="Optimized Image" width="250" height="300" />

            <h1><span>I'm Payel Chatterjee</span></h1>
            <p> I'm a B.Tech 2024 graduate in Information Technology </p>
            <div className="hero-action">
                <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
                <div className="hero-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Hero 