import React from "react"
import portfolioStyles from "./portfolio.module.scss"

const Portfolio = () => {
  return (
    <><div className="react-transition scale-in-right" style={{animationDuration: '1s'}}>

      <div className={portfolioStyles.portfolioContainer}>

        <div className={portfolioStyles.pImage}></div>

        <div className={portfolioStyles.pDescription}>Hello World</div>
        
        </div>
      
      </div>
    </>
  )
}

export default Portfolio
