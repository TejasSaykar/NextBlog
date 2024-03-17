import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/Button/Button'

export const metadata = {
    title: "Contact Information",
    description: "This is Contact Page"
}

const Contact = () => {
    return (
        <div className={ styles.container }>
            <h1 className={ styles.title }>Let's Keep in Touch</h1>
            <div className={ styles.content }>
                <div className={ styles.imgContainer }>
                    <Image
                        src="/bg2Img.jpg"
                        fill={ 'true' }
                        className={ styles.img }
                    />
                </div>
                <form className={ styles.form }>
                    <input type="text" placeholder='name' className={ styles.input } />
                    <input type="text" name='email' className={ styles.input } />
                    <textarea cols="30" rows="6" className={ styles.textArea } placeholder='message'></textarea>
                    <Button url="#" text="Send" />
                </form>
            </div>
        </div>
    )
}

export default Contact
