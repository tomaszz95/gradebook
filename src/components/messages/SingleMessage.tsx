import styles from './SingleMessage.module.css'

import { MessagesInfoType } from '../helpers/types'

type ComponentType = {
	name: string
	messageValues: [MessagesInfoType]
	img: string
}

const SingleMessage: React.FC<ComponentType> = ({ name, messageValues, img }) => {
	return (
		<li className={styles.item}>
			<img src={img} alt={name} className={styles.img} />
			<div className={styles.content}>
				<p className={styles.text}>{messageValues[0].content}</p>
				<div className={styles.box}>
					<span className={styles.info}>{messageValues[0].author}</span>
					<span className={styles.info}>{messageValues[0].date}</span>
				</div>
			</div>
		</li>
	)
}

export default SingleMessage
