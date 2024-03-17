"use client"

import React, { useContext } from 'react'
import styles from "./darkmode.module.css"
import { ThemeContext } from '@/context/ThemeContext'

const Darkmode = () => {

    const { toggle, mode } = useContext(ThemeContext)

    return (
        <div className={ styles.container } onClick={ toggle }>
            <div className={ styles.icon }>🌙</div>
            <div className={ styles.icon }>🌞</div>
            <div className={ styles.ball } style={ mode === "light" ? { left: "20px" } : { right: "20px" } } />

        </div>
    )
}

export default Darkmode
