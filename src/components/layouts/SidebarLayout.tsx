import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import { loginDataActions } from '../../store/login-slice'
import Sidebar from '../sidebar/Sidebar'

import { ChildrenLayoutType, LoginDataType } from '../helpers/types'
import styles from './SidebarLayout.module.css'

const SidebarLayout: React.FC<ChildrenLayoutType> = ({ children }) => {
	const loginInfoData = useSelector<any, LoginDataType>(state => state.loginData)
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
	const router = useRouter()

	useEffect(() => {
		const cookiesLoginEmail = localStorage.getItem('loginUserData')

		if (loginInfoData.email === '' && cookiesLoginEmail !== null) {
			dispatch(loginDataActions.getLoginInfo())
		} else if (loginInfoData.email === '' && cookiesLoginEmail === null) {
			router.push('/')
		} else if (
			loginInfoData.email !== '' &&
			cookiesLoginEmail !== null &&
			!router.pathname.includes(loginInfoData.role)
		) {
			router.push(`/${loginInfoData.role}/news`)
		}
	}, [loginInfoData])

	return (
		<main className={styles.main}>
			<Sidebar />
			<section className={styles.content}>
				<div className={styles.card}>{children}</div>
			</section>
		</main>
	)
}

export default SidebarLayout
