import Image from 'next/image'
import Link from 'next/link'

import styles from './HomepageView.module.css'

const HomepageView = () => {
	return (
		<main className={styles.main}>
			<h1 className={styles.title}>Welcome to Gradebook!</h1>
			<div className={styles.iconbox}>
				<Link href='/login/student' className={styles.link}>
					<Image src='/icons/bookicon.png' className={styles.icon} alt='' width='240' height='240' />
					<span className={styles.text}>Login as Student</span>
				</Link>
				<Link href='/login/teacher' className={styles.link}>
					<Image src='/icons/studenticon.png' className={styles.icon} alt='' width='240' height='240' />
					<span className={styles.text}>Login as Teacher</span>
				</Link>
			</div>
		</main>
	)
}

export default HomepageView
