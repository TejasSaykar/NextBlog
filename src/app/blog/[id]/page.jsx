import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store"
    })
    if (!res.ok) {
        return notFound();
    }

    return res.json();
}

export async function generateMetadata({ params }) {
    const post = await getData(params.id);
    return {
        title: post.title,
        description: post.desc
    }
}

const BlogPost = async ({ params }) => {
    // const data = await getData(params.id)
    return (
        <div className={ styles.container }>
            <div className={ styles.top }>
                <div className={ styles.info }>
                    <h1 className={ styles.title }>
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                    </h1>
                    <p className={ styles.desc }>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id nobis voluptas cupiditate explicabo delectus, illo iure voluptate enim. Excepturi, consequuntur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit repellat error natus odio earum similique sed alias rem officiis officia.
                    </p>
                    <div className={ styles.author }>
                        <Image
                            src="/testimonials-4.jpg"
                            width={ 30 }
                            height={ 30 }
                            className={ styles.avatar }
                        />
                        <span className={ styles.username }>
                            John Doe
                        </span>
                    </div>
                </div>
                <div className={ styles.imgContainer }>
                    <Image
                        src="/portfolio-8.jpg"
                        width={ 350 }
                        height={ 200 }
                        className={ styles.img }
                    />
                </div>
            </div>
            <div className={ styles.content }>
                <div className={ styles.text }>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, distinctio eligendi! Maiores temporibus quos ea animi dolores veritatis numquam. Ad, numquam. Laboriosam fugit quis reprehenderit excepturi voluptates repellendus sint, itaque explicabo consectetur praesentium fugiat, eius distinctio ullam cupiditate architecto assumenda quibusdam. Exercitationem, praesentium consectetur culpa ipsa explicabo rerum quidem distinctio.
                    <br /> <br />
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum explicabo suscipit fugit omnis, provident corporis sed deleniti dolorum unde, incidunt debitis itaque architecto qui necessitatibus.
                    <br /><br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat ipsam, corporis omnis sed autem facere veniam eum officia reprehenderit vitae quisquam nihil tempore sint repudiandae eaque, rerum veritatis sunt dolorum animi id unde blanditiis corrupti ut. Dolorem odio necessitatibus voluptatem libero blanditiis vel, quod asperiores?
                </div>
            </div>
        </div>
    )
}

export default BlogPost
