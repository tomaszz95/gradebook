import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
import { onAuthStateChanged, signOut } from 'firebase/auth'

import auth from '../../../firebase'
import Navigation from './Navigation'
import PersonalInfo from './PersonalInfo'
import { loginDataActions } from 'src/store/login-slice'

import { LoginDataType } from '../helpers/types'
import styles from './Sidebar.module.css'

const Sidebar = () => {
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
	const router = useRouter()
	const loginInfoData = useSelector<any, LoginDataType>(state => state.loginData)

	useEffect(() => {
		onAuthStateChanged(auth, currentUser => {
			if (currentUser && loginInfoData.email !== currentUser.email) {
				dispatch(loginDataActions.setLoginInfo(currentUser.email))
			}
		})
	}, [])

	const logoutHandler = () => {
		signOut(auth)
		router.push('/')
	}
	return (
		<section className={styles.sidebar}>
			<h1 className={styles.title}>Gradebook</h1>
			<PersonalInfo loggedUserData={loginInfoData} />
			<Navigation loggedUserRole={loginInfoData.role} />
			<p className={styles.luckybox}>
				Lucky number: <span className={styles.luckynumber}>23</span>
			</p>
			<button aria-label='Click to log out' className={styles.btn} onClick={logoutHandler}>
				Log out
			</button>
		</section>
	)
}

export default Sidebar
