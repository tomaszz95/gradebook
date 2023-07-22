import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import Navigation from './Navigation'
import PersonalInfo from './PersonalInfo'

import { LoginDataType } from '../helpers/types'
import styles from './Sidebar.module.css'

const Sidebar = () => {
	const router = useRouter()
	const loginInfoData = useSelector<any, LoginDataType>(state => state.loginData)

	return (
		<section className={styles.sidebar}>
			<h1 className={styles.title}>Gradebook</h1>
			<PersonalInfo loggedUserData={loginInfoData} />
			<Navigation loggedUserRole={loginInfoData.role} />
			<p className={styles.luckybox}>
				Lucky number: <span className={styles.luckynumber}>23</span>
			</p>
			<button
				aria-label='Click to log out'
				className={styles.btn}
				onClick={() => {
					router.push('/')
				}}>
				Log out
			</button>
		</section>
	)
}

export default Sidebar
