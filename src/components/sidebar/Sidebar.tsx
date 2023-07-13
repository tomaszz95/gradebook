import Navigation from './Navigation'
import PersonalInfo from './PersonalInfo'
import styles from './Sidebar.module.css'
import { useRouter } from 'next/router'

const dummyarrStudent = {
	type: 'Student',
	info: '3C',
	name: 'Jacek Kowalski',
	photo: '/photos/noname.jpg',
}

const dummyarrTeacher = {
	type: 'Teacher',
	info: 'Math',
	name: 'Michał Wiśniewski',
	photo: '/photos/noname.jpg',
}

const Sidebar = () => {
	const router = useRouter()
	const whoIsLogged = router.pathname.includes('student') ? dummyarrStudent : dummyarrTeacher

	return (
		<section className={styles.sidebar}>
			<h1 className={styles.title}>Gradebook</h1>
			<PersonalInfo loggedUserData={whoIsLogged} />
			<Navigation loggedUserType={whoIsLogged.type} />
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
