import Image from 'next/image'
import Router from 'next/router'

import LoginForm from './LoginForm'
import { FormDataType } from '../helpers/types'
import styles from './TeacherLogin.module.css'

const TeacherLogin = () => {
	const formDataHandler = (data: FormDataType) => {
		console.log(data)
	}

	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Gradebook</h1>
			<LoginForm type='teacher' onFormData={formDataHandler} />
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

export default TeacherLogin
