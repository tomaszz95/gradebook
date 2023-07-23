import Link from 'next/link'

import { SingleNewsDataRoleType } from '../helpers/types'
import styles from './SingleNews.module.css'

const SingleNews: React.FC<SingleNewsDataRoleType> = ({ newsData, role }) => {
	const slug = newsData.title.toLowerCase().replaceAll(' ', '-')

	return (
		<li className={styles.item}>
			<Link href={`/${role}/news/${slug}`}>
				<img src={newsData.img} alt={newsData.title} className={styles.img} />
				<div className={styles.content}>
					<h3 className={styles.title}>{newsData.title}</h3>
					<p className={styles.text}>{newsData.description}</p>
					<div className={styles.box}>
						<span className={styles.info}>{newsData.date}</span>
						<span className={styles.info}>{newsData.author}</span>
					</div>
				</div>
			</Link>
			{newsData.delete === true && role === 'teacher' && <button className={styles.deleteBtn}>X</button>}
		</li>
	)
}

export default SingleNews
