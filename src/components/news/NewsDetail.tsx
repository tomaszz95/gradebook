import { useRouter } from 'next/router'

import { SingleNewsDataType } from '../helpers/types'
import styles from './NewsDetail.module.css'

type ComponentType = { singleNews: SingleNewsDataType }

const NewsDetail: React.FC<ComponentType> = ({ singleNews }) => {
	const router = useRouter()

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{singleNews.title}</h2>
			<div className={styles.box}>
				<img src={singleNews.img} alt={singleNews.title} className={styles.img} />
				<div className={styles.content}>
					<p className={styles.description}>{singleNews.text}</p>
					<div className={styles.moreInfo}>
						<span className={styles.info}>{singleNews.date}</span>
						<span className={styles.info}>{singleNews.author}</span>
					</div>
				</div>
			</div>
			<button
				aria-label='Click to go back to news list'
				className={styles.button}
				onClick={() => {
					router.back()
				}}>
				<img src='/icons/arrowLeft.png' alt='Back arrow' />
				<span>Go back</span>
			</button>
		</div>
	)
}

export default NewsDetail
