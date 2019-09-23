import React from 'react'
import layoutStyles from './layout.module.scss';



export default function Layout (props) {
    return (
        <>
        <div className={layoutStyles.container}>
            {props.children}
        </div>
        </>
    )
}