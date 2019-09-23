import React from 'react'
import portfolioStyles from './portfolio.module.scss';

const Portfolio = () => {
    return (
        <>
        
        <div className={portfolioStyles.portfolioContainer}>
            
            <div className={portfolioStyles.portfolioDiv}>
               
               <ul>
                   <li>
                       Tech Used: React, SemanticUI
                   </li>
               </ul>
            </div>
            <div className={portfolioStyles.portfolioDiv}>

                DIV 2
                
                </div>
                <div className={portfolioStyles.portfolioDiv}>

                    DIV 3
                
                </div>
            </div>
        </>
    )
}

export default Portfolio 