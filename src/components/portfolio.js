import React from 'react'
import portfolioStyles from './portfolio.module.scss';
import CalcImage from '../images/calculator.png';

const Portfolio = () => {
    return (
        <>
        
        
        <div className={portfolioStyles.portfolioContainer}>
            
            <div className={portfolioStyles.portfolioDiv}>
                <img src={CalcImage} alt="calculator image" />
                <div style={{background: 'skyblue', border: '5px solid yellow', width: '50%', height: '50%', margin: '0 auto'}} > hello world/</div>
               
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