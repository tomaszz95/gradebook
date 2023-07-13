import { NewsListDataType } from '../helpers/types'
import Image from 'next/image'
import styles from './SingleNews.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const SingleNews: React.FC<NewsListDataType> = ({ title, date, text, id, author }) => {
	const router = useRouter()
	const slug = title.toLowerCase().replaceAll(' ', '-')
	const whoIsLogged = router.pathname.includes('student') ? 'student' : 'teacher'

	return (
		<Link href={`/${whoIsLogged}/news/${slug}`} className={styles.item}>
			<Image src={`/photos/news/${id}.jpg`} alt={title} width='1200' height='1200' className={styles.img} />
			<div className={styles.content}>
				<h3 className={styles.title}>{title}</h3>
				<p className={styles.text}>{text}</p>
				<div className={styles.box}>
					<span className={styles.info}>{date}</span>
					<span className={styles.info}>{author}</span>
				</div>
			</div>
		</Link>
	)
}

export default SingleNews
