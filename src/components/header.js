import React from 'react'
import headerStyles from './header.module.scss';
import GitHubLogo from '../images/github.png';
import TwitterLogo from '../images/twitter.png';
import LinkedInLogo from '../images/linkedin.png';
import EmailLogo from '../images/email.png';

const Header = () => {
    return (
        <>
        <div className={headerStyles.headerContainer}>
        <div className={headerStyles.brand}>
            
            <div className={headerStyles.intro}>Hello, I'm</div>
            <div className={headerStyles.name}>   RON HUGHES </div>
            <div className={headerStyles.intro}>Full-Stack Web Developer </div>
        
        </div> 
            <div className={headerStyles.social}>
            <img src={GitHubLogo} />
            <img src={TwitterLogo} />
            <img src={LinkedInLogo} />
            <img src={EmailLogo} />
            </div>
        </div>
        </>
    )
}

export default Header