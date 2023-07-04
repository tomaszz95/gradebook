import { useRef, useState } from 'react'
import Router from 'next/router'

import { LoginFormComponentType } from '../helpers/types'
import styles from './LoginForm.module.css'

const LoginForm: React.FC<LoginFormComponentType> = ({ type, onFormData }) => {
	const usernameRef = useRef<HTMLInputElement>(null)
	const passwordRef = useRef<HTMLInputElement>(null)
	const identifierRef = useRef<HTMLInputElement>(null)
	const [usernameError, setUsernameError] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const [identifierError, setIdentifierError] = useState('')

	const fixedTitle = type.toUpperCase()
	const fixedIdentifier = type.charAt(0).toUpperCase() + type.slice(1)

	const loginHandler = (e: React.SyntheticEvent) => {
		e.preventDefault()

		if (usernameRef.current && usernameRef.current.value.trim() === '') {
			setUsernameError('Username cannot be empty!')
		} else {
			setUsernameError('')
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
			usernameRef.current &&
			usernameRef.current.value.trim() !== '' &&
			passwordRef.current &&
			passwordRef.current.value.trim() !== '' &&
			identifierRef.current &&
			identifierRef.current.value.trim() !== ''
		) {
			const inputsData = {
				username: usernameRef.current.value,
				password: passwordRef.current.value,
				identifier: identifierRef.current.value,
			}

			onFormData(inputsData)
			Router.push(`/${type}/news`)
		}
	}

	return (
		<form className={styles.form} onSubmit={loginHandler} aria-label='Login form'>
			<h2 className={styles.title}>{fixedTitle}</h2>
			<div className={styles.box}>
				<label className={styles.label} htmlFor='username'>
					Username
				</label>
				<input placeholder='Enter username...' className={styles.input} type='text' id='username' ref={usernameRef} />
				<p className={styles.error}>{usernameError}</p>
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