import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from './Navigation.module.css'

const Navigation = () => {
	const router = useRouter()

	return (
		<nav className={styles.navigation}>
			<h3 className={styles.menu}>MENU</h3>
			<Link href='/student/news' className={`${styles.link} ${router.pathname.includes('news') ? styles.active : ''}`}>
				<Image
					src={`${router.pathname.includes('news') ? '/icons/staractive.png' : '/icons/star.png'}`}
					alt=''
					width='25'
					height='25'
				/>
				<span className={styles.item}>News</span>
			</Link>
			<Link
				href='/student/timetable'
				className={`${styles.link} ${router.pathname.includes('timetable') ? styles.active : ''}`}>
				<Image
					src={`${router.pathname.includes('timetable') ? '/icons/staractive.png' : '/icons/star.png'}`}
					alt=''
					width='25'
					height='25'
				/>
				<span className={styles.item}>Timetable</span>
			</Link>
			<Link
				href='/student/grades'
				className={`${styles.link} ${router.pathname.includes('grades') ? styles.active : ''}`}>
				<Image
					src={`${router.pathname.includes('grades') ? '/icons/staractive.png' : '/icons/star.png'}`}
					alt=''
					width='25'
					height='25'
				/>
				<span className={styles.item}>Grades</span>
			</Link>
			<Link
				href='/student/messanges'
				className={`${styles.link} ${router.pathname.includes('messanges') ? styles.active : ''}`}>
				<Image
					src={`${router.pathname.includes('messanges') ? '/icons/staractive.png' : '/icons/star.png'}`}
					alt=''
					width='25'
					height='25'
				/>
				<span className={styles.item}>Messanges</span>
			</Link>
			<Link
				href='/student/statistics'
				className={`${styles.link} ${router.pathname.includes('statistics') ? styles.active : ''}`}>
				<Image
					src={`${router.pathname.includes('statistics') ? '/icons/staractive.png' : '/icons/star.png'}`}
					alt=''
					width='25'
					height='25'
				/>
				<span className={styles.item}>Statistics</span>
			</Link>
		</nav>
	)
}

export default Navigation
