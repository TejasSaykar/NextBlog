"use client"

import React from 'react'
import styles from "./Footer.module.css"
import Image from 'next/image'


const Footer = () => {
    return (
        <div className={ styles.container }>
            <div>@2023 TejBlog. All rights reserved</div>
            <div className={ styles.social }>
                <Image src="/insta.jpg" width={ 27 } height={ 25 } alt='Instagram' className={ styles.icon } />
                <Image src="/linkedin.png" width={ 25 } height={ 25 } alt='Linkedin' className={ styles.icon } />
                <Image src="/twitter.png" width={ 27 } height={ 25 } alt='Twitter' className={ styles.icon } />
            </div>
        </div>
    )
}

export default Footer
