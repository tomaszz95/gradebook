import Link from 'next/link'
import styles from './LoginView.module.css'

const LoginView = () => {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Welcome to Gradebook!</h1>
			<div className={styles.iconbox}>
				<Link href='/student/news' className={styles.link}>
					<img src='/icons/bookicon.png' className={styles.icon} />
					<span className={styles.text}>Login as Student</span>
				</Link>
				<Link href='/teacher/news' className={styles.link}>
					<img src='/icons/studenticon.png' className={styles.icon} />
					<span className={styles.text}>Login as Teacher</span>
				</Link>
			</div>
		</main>
	)
}

export default LoginView
