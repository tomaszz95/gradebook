import { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import Router from 'next/router'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { loginDataActions } from '../../store/login-slice'
import auth from '../../../firebase'

import styles from './LoginForm.module.css'

type ComponentType = { type: string }

const LoginForm: React.FC<ComponentType> = ({ type }) => {
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const fixedTitle = type.toUpperCase()

    const loginHandler = async (e: React.SyntheticEvent) => {
        e.preventDefault()

        if (emailRef.current && emailRef.current.value.trim() === '') {
            setEmailError('Email cannot be empty!')
        } else if (emailRef.current && !emailRef.current.value.includes(type)) {
            setEmailError('Please enter a valid e-mail address!')
        } else {
            setEmailError('')
        }

        if (passwordRef.current && passwordRef.current.value.trim() === '') {
            setPasswordError('Password cannot be empty!')
        } else {
            setPasswordError('')
        }

        if (
            emailRef.current &&
            emailRef.current.value.trim() !== '' &&
            emailRef.current.value.includes(type) &&
            passwordRef.current &&
            passwordRef.current.value.trim() !== ''
        ) {
            signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
                .then((userCredential) => {
                    const userEmail = userCredential.user.email
                    if (userEmail) {
                        dispatch(loginDataActions.setLoginInfo(userEmail))
                    }
                    Router.push(`/${type}/news`)
                })
                .catch((error) => {
                    if (error.code.includes('email') || error.code.includes('user')) {
                        setEmailError('Please enter a valid e-mail address!')
                    } else if (error.code.includes('password')) {
                        setPasswordError('Please enter a valid password!')
                    }
                })
        }
    }

    return (
        <form className={styles.form} onSubmit={loginHandler} aria-label="Login form">
            <h2 className={styles.title}>{fixedTitle}</h2>
            <div className={styles.loginInfo}>
                ?
                <div className={styles.loginModal}>
                    To log in as a {type}: <br />
                    login: {type}1@{type}.com ; password: {type}1 ; ID empty
                </div>
            </div>
            <div className={styles.box}>
                <label className={styles.label} htmlFor="email">
                    Email
                </label>
                <input
                    placeholder="Enter username..."
                    className={styles.input}
                    type="email"
                    id="username"
                    ref={emailRef}
                />
                <p className={styles.error}>{emailError}</p>
            </div>
            <div className={styles.box}>
                <label className={styles.label} htmlFor="password">
                    Password
                </label>
                <input
                    placeholder="Enter password..."
                    className={styles.input}
                    type="password"
                    id="password"
                    ref={passwordRef}
                />
                <p className={styles.error}>{passwordError}</p>
            </div>
            <button type="submit" aria-label="Click to log in" className={styles.button}>
                Click to log in!
            </button>
        </form>
    )
}

export default LoginForm
