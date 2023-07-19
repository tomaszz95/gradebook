import { useRef, useState } from 'react'
import Router from 'next/router'
import auth from '../../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

import styles from './LoginForm.module.css'

const LoginForm: React.FC<{ type: string }> = ({ type }) => {
	const emailRef = useRef<HTMLInputElement>(null)
	const passwordRef = useRef<HTMLInputElement>(null)
	const identifierRef = useRef<HTMLInputElement>(null)
	const [emailError, setEmailError] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const [identifierError, setIdentifierError] = useState('')

	const fixedTitle = type.toUpperCase()
	const fixedIdentifier = type.charAt(0).toUpperCase() + type.slice(1)

	const loginHandler = async (e: React.SyntheticEvent) => {
		e.preventDefault()

		if (emailRef.current && emailRef.current.value.trim() === '') {
			setEmailError('Email cannot be empty!')
		} else if (emailRef.current && !emailRef.current.value.includes(type)) {
			setEmailError('Please enter valid e-mail address!')
		} else {
			setEmailError('')
		}

		if (passwordRef.current && passwordRef.current.value.trim() === '') {
			setPasswordError('Password cannot be empty!')
		} else {
			setPasswordError('')
		}

		if (identifierRef.current && identifierRef.current.value.trim() === '') {
			setIdentifierError('Identifier cannot be empty!')
		} else {
			setIdentifierError('')
		}

		if (
			emailRef.current &&
			emailRef.current.value.trim() !== '' &&
			emailRef.current.value.includes(type) &&
			passwordRef.current &&
			passwordRef.current.value.trim() !== '' &&
			identifierRef.current &&
			identifierRef.current.value.trim() !== ''
		) {
			signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
				.then(userCredential => {
					const user = userCredential.user
					console.log(user)
					Router.push(`/${type}/news`)
				})
				.catch(error => {
					console.log(error);
					if (error.code.includes('email') || error.code.includes('user')) {
						setEmailError('Please enter valid e-mail address!')
					} else if (error.code.includes('password')) {
						setPasswordError('Please enter valid password!')
					}
				})
		}
	}

	return (
		<form className={styles.form} onSubmit={loginHandler} aria-label='Login form'>
			<h2 className={styles.title}>{fixedTitle}</h2>
			<div className={styles.box}>
				<label className={styles.label} htmlFor='email'>
					Email
				</label>
				<input placeholder='Enter username...' className={styles.input} type='email' id='username' ref={emailRef} />
				<p className={styles.error}>{emailError}</p>
			</div>
			<div className={styles.box}>
				<label className={styles.label} htmlFor='password'>
					Password
				</label>
				<input
					placeholder='Enter password...'
					className={styles.input}
					type='password'
					id='password'
					ref={passwordRef}
				/>
				<p className={styles.error}>{passwordError}</p>
			</div>
			<div className={styles.box}>
				<label className={styles.label} htmlFor='identifier'>
					{fixedIdentifier} ID
				</label>
				<input
					placeholder={`Enter your ${type} ID...`}
					className={styles.input}
					type='text'
					id='identifier'
					ref={identifierRef}
				/>
				<p className={styles.error}>{identifierError}</p>
			</div>
			<button type='submit' aria-label='Click to log in' className={styles.button}>
				Click to log in!
			</button>
		</form>
	)
}

export default LoginForm
