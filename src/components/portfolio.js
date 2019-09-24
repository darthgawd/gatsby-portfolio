import React from 'react'
import portfolioStyles from './portfolio.module.scss';
import CalcImage from '../images/calculator.png';

const Portfolio = () => {
    return (
        <>
        
        
        <div className={portfolioStyles.portfolioContainer}>
            
            <div className={portfolioStyles.portfolioDiv}>
               <center> <img src={CalcImage} alt="calculator image" /></center>
               
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