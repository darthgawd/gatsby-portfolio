import React, { useState, useEffect } from "react"
import homeStyles from "./home.module.scss"
import HandsomeMan from "../images/handsome-man.png"
import posed from "react-pose"

const About = () => {
  // const [isVisible, setIsVisible] = useState(true)

  // useEffect(() => {
  //   setInterval(() => {
  //   setIsVisible(!isVisible)
  //   }, 2000);
  // }, [])
  // const Box = posed.div({
  //   visible: { scale: 1.5},
  // });

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
            <Menu className={homeStyles.menuSpan}>Home</Menu>
            <Menu className={homeStyles.menuSpan}>About</Menu>
            <Menu className={homeStyles.menuSpan}>Portfolio</Menu>
            <Menu className={homeStyles.menuSpan}>Contact</Menu>
          </nav>
        </div>
        <div>
          <div className={homeStyles.about}>
            <p>Hello World</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
