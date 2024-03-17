"use client"

import { useState } from 'react'
import styles from "./page.module.css"
import Link from 'next/link'


const Login = () => {
    const [inputs, setInputs] = useState({
        username: "",
        password: ""
    })

    const handleChange = (e) => {
        setInputs((prev) => (
            { ...prev, [e.target.value]: e.target.value }
        ))
    }

    return (
        <div className={ styles.container }>
            <div className={ styles.login }>
                <h1 className={ styles.h1 }>Login</h1>
                <form className={ styles.form }>
                    <div className={ styles.username }>
                        <label htmlFor="">Username</label>
                        <input type="text" placeholder='username' value={ inputs.username } onChange={ handleChange } />
                    </div>
                    <div className={ styles.password }>
                        <label htmlFor="">Password</label>
                        <input type="password" placeholder='password' value={ inputs.password } onChange={ handleChange } />
                    </div>
                    <button>Login</button>
                    <span>Don't have an account? <Link href="/dashboard/register">Register</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login
