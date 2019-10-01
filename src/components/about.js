import React from 'react'
import aboutStyles from './about.module.scss'
import HandsomeMan from '../images/handsome-man.png'

const About = () => {
    return (
        <>
        
        <div className={aboutStyles.about}>
            <div className={aboutStyles.aboutLeft}>
        <img src={HandsomeMan} />
            </div>
            <div className={aboutStyles.aboutRight}>
                <p>
                    Hi I am Ron From CT and I am a full stack web developer with 1 years knowledge
                </p>
            </div>
        </div>
        </>
    )
}

export default About