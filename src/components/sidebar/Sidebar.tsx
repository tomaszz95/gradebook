import Navigation from './Navigation'
import PersonalInfo from './PersonalInfo'
import styles from './Sidebar.module.css'
import Router from 'next/router'

const Sidebar = () => {
	return (
		<section className={styles.sidebar}>
			<h1 className={styles.title}>Gradebook</h1>
			<PersonalInfo />
			<Navigation />
			<p className={styles.luckybox}>
				Lucky number: <span className={styles.luckynumber}>23</span>
			</p>
			<button
				aria-label='Click to log out'
				className={styles.btn}
				onClick={() => {
					Router.push('/')
				}}>
				Log out
			</button>
		</section>
	)
}

export default Sidebar
