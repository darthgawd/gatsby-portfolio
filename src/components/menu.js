import React, { useState, useEffect } from "react"
import menuStyles from "./menu.module.scss"
import HandsomeMan from "../images/handsome-man.png"
import posed from "react-pose"
import { Link } from "@reach/router";

const Menu = () => {
  const Menu = posed.div({
    pressable: true,
    init: { scale: 1 },
    press: { scale: 0.8 },
  })
  return (
    <>
          <div className={menuStyles.nav}>
            <Menu className={menuStyles.menuSpan}>
              <Link to="/"> Home</Link>
            </Menu>
            <Menu className={menuStyles.menuSpan}> <Link to="portfolio">Portfolio</Link></Menu>
            <Menu className={menuStyles.menuSpan}>Resume</Menu>
          </div>
    </>
  )
}

export default Menu
