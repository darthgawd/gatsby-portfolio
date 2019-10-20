import React from "react"
import headerStyles from "./header.module.scss";
import { fadeIn } from 'react-animations';
import Typist from "react-typist";
import "react-typist/dist/Typist.css"
import GitHubImage from '../images/github.png';
import LinkedInImage from '../images/linkedin.png';
import TwitterImage from '../images/twitter.png';
import EmailImage from '../images/email.png';

const Header = () => {

  const curs = {
    show: true
  }

    return (
      <>
      <div className={headerStyles.headerContainer}>
        <div className={headerStyles.header}>
          <Typist avgTypingDelay={100} cursor={curs}>
        <span content="R">R </span>
        <span content="o">o </span>
        <span content="n">n </span>
        <span>  </span>
        <span content="H">H </span>
        <span content="u">u </span>
        <span content="g">g </span>
        <span content="h">h </span>
        <span content="e">e </span>
        <span content="s">s </span>
        </Typist>
       
        </div>
       <div className={headerStyles.imgDiv}>
       <img src={GitHubImage} />
      <img src={LinkedInImage} />
      <img src={TwitterImage} />
      <img src={EmailImage} />
         </div> 
     </div>
        </>
    )
}


export default Header