import styles from './PersonalInfo.module.css'
import Image from 'next/image'
import Router from 'next/router'

const PersonalInfo: React.FC<any> = ({ loggedUserData }) => {
	return (
		<div className={styles.box}>
			<h2 className={styles.type}>{loggedUserData.type}</h2>
			<h3 className={styles.info}>{loggedUserData.info}</h3>
			<Image
				src={loggedUserData.photo}
				className={styles.img}
				alt={`Photo of ${loggedUserData.name}`}
				height='150'
				width='150'
			/>
			<p className={styles.name}>{loggedUserData.name}</p>
			<div className={styles.line} />
		</div>
	)
}

export default PersonalInfo
