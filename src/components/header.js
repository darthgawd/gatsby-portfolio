import React from "react"
import headerStyles from "./header.module.scss"
import styled, { keyframes } from "styled-components"
import { fadeInLeft } from "react-animations"
import Typist from "react-typist"
import "react-typist/dist/Typist.css"
import GitHubImage from "../images/github.png"
import LinkedInImage from "../images/linkedin.png"
import TwitterImage from "../images/twitter.png"
import EmailImage from "../images/email.png"

const Header = () => {
  const curs = {
    show: true,
  }
  const fadeAnimation = keyframes`${fadeInLeft}`
  const FadeDiv = styled.div`
    animation: 3s ${fadeAnimation};
    color: white;
    font-size: 3.4rem;
  `

  return (
    <>
      <div className={headerStyles.headerContainer}>
        <div className={headerStyles.header}>
          <Typist avgTypingDelay={150} cursor={curs}>
            <span content="R">R</span>
            <span content="o">o</span>
            <span content="n">n</span>
            <span>&nbsp; </span>
            <span content="H">H</span>
            <span content="u">u</span>
            <span content="g">g</span>
            <span content="h">h</span>
            <span content="e">e</span>
            <span content="s">s</span>
          </Typist>
        </div>
        <br /> <br />
        <FadeDiv> Full-Stack Web Developer</FadeDiv>
        <div className={headerStyles.imgDiv}>
          <a href="https://www.github.com/ron-hughes">
            <img src={GitHubImage} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/ron-hughes/">
            <img src={LinkedInImage} alt="LinkedIn Icon" />
          </a>
          <a href="https://twitter.com/eyecodethings">
            <img src={TwitterImage} alt="Twitter Icon" />
          </a>
          <img src={EmailImage} />
        </div>
        <section>
          Built with GatsbyJS
        </section>
      </div>
    </>
  )
}

export default Header
