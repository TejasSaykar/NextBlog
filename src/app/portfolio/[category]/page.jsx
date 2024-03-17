import React from 'react'
import styles from "./page.module.css"
import Button from '@/components/Button/Button'
import Image from 'next/image'


const Category = ({ params }) => {
    return (
        <div className={ styles.container }>
            <h1 className={ styles.catTitle }>{ params.category }</h1>
            <div className={ styles.item }>
                <div className={ styles.content }>
                    <h1 className={ styles.title }>Test</h1>
                    <p className={ styles.desc }>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit maxime provident dolore, assumenda corporis soluta inventore, ab, quibusdam ea porro nam dolor officia illo.
                    </p>
                    <Button text="See More" url="#" />
                </div>
                <div className={ styles.imgContainer }>
                    <Image src="/portfolio-3.jpg" fill="true" className={ styles.img } />
                </div>
            </div>
            <div className={ styles.item }>
                <div className={ styles.content }>
                    <h1 className={ styles.title }>Test</h1>
                    <p className={ styles.desc }>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi fugit maxime provident dolore, assumenda corporis soluta inventore, ab, quibusdam ea porro nam dolor officia illo.
                    </p>
                    <Button text="See More" url="#" />
                </div>
                <div className={ styles.imgContainer }>
                    <Image src="/portfolio-3.jpg" fill="true" className={ styles.img } />
                </div>
            </div>
        </div>
    )
}

export default Category
