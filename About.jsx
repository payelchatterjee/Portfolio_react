import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import about from '../../assets/about.jpg'



const About = () => {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
                <img src={theme_pattern} alt=""  style={{ width: "50%", height: "auto" }} />
            </div>
            <div className="about-section">
                <div className="about-left">
                <img src={about} alt="About Section" />

                </div>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p> I'm a recent graduate with a strong foundation in programming, software development, and problem-solving. Passionate about leveraging technical skills to develop innovative solutions and contribute to dynamic projects. Seeking an entry-level role in a growth-oriented organization where I can apply my knowledge of React, SQL, Power Bi ,Java, Web Development, etc. while continuously learning and evolving in the field of IT. </p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skills"><p>HTML&CSS</p><hr style={{ width: "50%" }} /></div>
                        <div className="about-skills"><p>React Js</p><hr style={{ width: "70%" }} /></div>
                        <div className="about-skills"><p>JavaScript</p><hr style={{ width: "60%" }} /></div>
                        <div className="about-skills"><p>Java</p><hr style={{ width: "50%" }} /></div>
                    </div>
                </div>
            

        </div>
    )
}

export default About