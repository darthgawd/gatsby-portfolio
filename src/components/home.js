import React, { useState, useEffect } from "react"
import homeStyles from "./home.module.scss"
import HandsomeMan from "../images/handsome-man.png"
import posed from "react-pose"
import { Link } from 'gatsby';

const About = () => {
  const Menu = posed.div({
    pressable: true,
    init: { scale: 1 },
    press: { scale: 0.8 },
  })
  return (
    <>
      <div className={homeStyles.center}>
        <div className={homeStyles.navMain}>
          <nav className={homeStyles.nav}>
            <Menu className={homeStyles.menuSpan}>
              <Link to="/"> Home</Link>
            </Menu>
            <Menu className={homeStyles.menuSpan}><Link to="about">About</Link></Menu>
            <Menu className={homeStyles.menuSpan}><Link to="portfolio">Portfolio</Link></Menu>
            <Menu className={homeStyles.menuSpan}>Contact</Menu>
          </nav>
        </div>
        <div>HI! I am Ron Hughes and I am a Full-Stack Web Developer</div>
      </div>
    </>
  )
}

export default About
