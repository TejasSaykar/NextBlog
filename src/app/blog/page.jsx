import React from 'react'
import styles from "./page.module.css"
import Link from 'next/link'
import Image from 'next/image'


// async function getData() {
//     const res = await fetch("http://localhost:3000/api/posts", {
//         cache: "no-store"
//     });

//     if (!res.ok) {
//         throw new Error("Failed to fetch the data");
//     }
//     return res.json();
// }


const Blog = async () => {
    // const data = await getData();
    return (
        <div className={ styles.mainContainer }>
            {/* { data?.map((item) => ( */ }
            <Link href="/blog/testId" className={ styles.container }>
                <div className={ styles.imgContainer }>
                    <Image
                        src="/blogImg.webp"
                        width={ 350 }
                        height={ 300 }
                    />
                </div>
                <div className={ styles.content }>
                    <h1 className={ styles.title }>
                        Test
                    </h1>
                    <p className={ styles.desc }>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque doloribus dolore molestiae aut praesentium et. Dignissimos obcaecati mollitia excepturi neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, vel.
                    </p>
                </div>
            </Link>
            {/* )) } */ }
        </div>
    )
}

export default Blog
