import styles from './SingleMessange.module.css'
import Image from 'next/image'

const SingleMessange: React.FC<any> = ({ id, name, messageValues }) => {
	return (
		<li className={styles.item}>
			<Image src={`/photos/students/${id}.jpg`} alt={name} width='300' height='300' className={styles.img} />

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

export default SingleMessange
