import Router from 'next/router'
import Image from 'next/image'

import LoginForm from './LoginForm'

import styles from './StudentLogin.module.css'

const StudentLogin = () => {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Gradebook</h1>
			<LoginForm type='student' />
			<button
				aria-label='Click to go back to homepage'
				className={styles.button}
				onClick={() => {
					Router.push('/')
				}}>
				<Image src='/icons/arrowLeft.png' alt='' width='65' height='40' />
				<span>Go back</span>
			</button>
		</main>
	)
}

export default StudentLogin
