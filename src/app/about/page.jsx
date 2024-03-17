import React from 'react'
import styles from "./page.module.css"
import Image from 'next/image'
import AboutImg from "public/bg2Img.jpg"
import Button from '@/components/Button/Button'

const About = () => {
    return (
        <div className={ styles.container }>
            <div className={ styles.imgContainer }>
                <Image src={ AboutImg } className={ styles.img } alt='About' />
                <div className={ styles.imgText }>
                    <h1 className={ styles.imgTitle }>Digital Storytellers</h1>
                    <h2 className={ styles.imgDesc }>Handcrafting award winning digital experience</h2>
                </div>
            </div>
            <div className={ styles.textContainer }>
                <div className={ styles.item }>
                    <h1 className={ styles.title }>Who Are We?</h1>
                    <p className={ styles.desc }>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni numquam debitis modi error optio eaque praesentium saepe quas id provident. Lorem ipsum dolor, perspiciatis.
                        <br />
                        <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aliquam vero mollitia reiciendis  consectetur adipisicing elit. Aperiam, reiciendis.

                    </p>
                </div>
                <div className={ styles.item }>
                    <h1 className={ styles.title }>What We Do?</h1>
                    <p className={ styles.desc }>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni numquam debitis modi error optio eaque praesentium saepe quas id provident.

                        <br /><br /> - Creative Illustrations
                        <br /><br /> - Dynamic Websites
                        <br /><br /> - Fast and Handy Mobile Apps

                    </p>
                    <Button url="/contact" text="Contact" />
                </div>
            </div>
        </div>
    )
}

export default About
