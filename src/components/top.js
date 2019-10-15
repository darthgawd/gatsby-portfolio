import React, { useState, useEffect } from "react"
import topStyles from "./top.module.scss";
import Typist from "react-typist"
import "react-typist/dist/Typist.css"

const Top = () => {


    return (
        <div className={topStyles.top}>
          <Typist avgTypingDelay={129}>
            Ron Hughes
            <Typist.Delay ms={500} />
            <br /> Full-Stack Web Developer.
          </Typist>
        </div>
    )
}


export default Top