import Link from 'next/link'

import { SingleNewsDataRoleType } from '../helpers/types'
import styles from './SingleNews.module.css'

const SingleNews: React.FC<SingleNewsDataRoleType> = ({ title, date, author, description, img, role }) => {
	const slug = title.toLowerCase().replaceAll(' ', '-')

	return (
		<li className={styles.item}>
			<Link href={`/${role}/news/${slug}`}>
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
