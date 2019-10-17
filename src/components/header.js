import React from "react"
import headerStyles from "./header.module.scss";
import Typist from "react-typist"
import "react-typist/dist/Typist.css"

const Header = () => {

  const curs = {
    show: false
  }

    return (
        <div className={headerStyles.header}><br /> <br />
          <Typist avgTypingDelay={129} cursor={curs}>
          <p>Ron Hughes </p>
        </Typist>
      
        </div>
    )
}


export default Header