import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Navigation.module.css'

type ComponentType = {
	loggedUserRole: string
}

const Navigation: React.FC<ComponentType> = ({ loggedUserRole }) => {
	const router = useRouter()
	const urlType = loggedUserRole.toLocaleLowerCase()

	const content = loggedUserRole ? (
		<nav className={styles.navigation}>
			<h3 className={styles.menu}>MENU</h3>
			<Link
				href={`/${urlType}/news`}
				className={`${styles.link} ${router.pathname.includes('news') ? styles.active : ''}`}>
				<Image
					src={`${router.pathname.includes('news') ? '/icons/staractive.png' : '/icons/star.png'}`}
					alt=''
					width='25'
					height='25'
				/>
				<span className={styles.item}>News</span>
			</Link>
			<Link
				href={`/${urlType}/timetable`}
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
				href={`/${urlType}/grades`}
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
				href={`/${urlType}/messages`}
				className={`${styles.link} ${router.pathname.includes('messages') ? styles.active : ''}`}>
				<Image
					src={`${router.pathname.includes('messages') ? '/icons/staractive.png' : '/icons/star.png'}`}
					alt=''
					width='25'
					height='25'
				/>
				<span className={styles.item}>Messages</span>
			</Link>
			<Link
				href={`/${urlType}/statistics`}
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
	) : null
	return content
}

export default Navigation
