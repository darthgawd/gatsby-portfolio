import React from "react"
import topStyles from "./top.module.scss";
import Typist from "react-typist"
import "react-typist/dist/Typist.css"

const Top = () => {

  const curs = {
    show: false
  }

    return (
        <div className={topStyles.top}>
          <Typist avgTypingDelay={129} cursor={curs}>
            Ron Hughes
            </Typist>
            
            <Typist startDelay={1200} cursor={curs} avgTypingDelay={120}> Full-Stack Web Developer.</Typist>
      
        </div>
    )
}


export default Top