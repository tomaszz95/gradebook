import { SingleNewsDataType } from '../helpers/types'
import Image from 'next/image'
import styles from './SingleNews.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SingleNews: React.FC<SingleNewsDataType> = ({ title, date, author, description, img }) => {
	const router = useRouter()
	const slug = title.toLowerCase().replaceAll(' ', '-')
	const whoIsLogged = router.pathname.includes('student') ? 'student' : 'teacher'

	return (
		<li>
			<Link href={`/${whoIsLogged}/news/${slug}`} className={styles.item}>
				<img src={img} alt={title} className={styles.img} />
				<div className={styles.content}>
					<h3 className={styles.title}>{title}</h3>
					<p className={styles.text}>{description}</p>
					<div className={styles.box}>
						<span className={styles.info}>{date}</span>
						<span className={styles.info}>{author}</span>
					</div>
				</div>
			</Link>
		</li>
	)
}

export default SingleNews
