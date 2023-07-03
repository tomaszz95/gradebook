import styles from './PersonalInfo.module.css'
import Image from 'next/image'

const dummyarr = {
	type: 'Student',
	info: '3C',
	name: 'Jacek Kowalski',
	photo: '/photos/noname.jpg',
}

const PersonalInfo = () => {
	return (
		<div className={styles.box}>
			<h2 className={styles.type}>{dummyarr.type}</h2>
			<h3 className={styles.info}>{dummyarr.info}</h3>
			<Image src={dummyarr.photo} className={styles.img} alt={`Photo of ${dummyarr.name}`} height='150' width='150' />
			<p className={styles.name}>{dummyarr.name}</p>
			<div className={styles.line} />
		</div>
	)
}

export default PersonalInfo
