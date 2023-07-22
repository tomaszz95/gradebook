import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'

import { loginDataActions } from 'src/store/login-slice'
import Sidebar from '../sidebar/Sidebar'

import { ChildrenLayoutType, LoginDataType } from '../helpers/types'
import styles from './SidebarLayout.module.css'

const SidebarLayout: React.FC<ChildrenLayoutType> = ({ children }) => {
	const loginInfoData = useSelector<any, LoginDataType>(state => state.loginData)
	const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

	useEffect(() => {
		if (loginInfoData.email === '') {
			dispatch(loginDataActions.getLoginInfo())
		}
	}, [])

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
