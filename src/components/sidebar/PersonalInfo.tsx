import { LoginDataType } from '../helpers/types'
import styles from './PersonalInfo.module.css'

type ComponentType = { loggedUserData: LoginDataType }

const PersonalInfo: React.FC<ComponentType> = ({ loggedUserData }) => {
	const roleName = loggedUserData.role.charAt(0).toUpperCase() + loggedUserData.role.slice(1)

	return (
		<div className={styles.box}>
			<h2 className={styles.type}>{roleName}</h2>
			<h3 className={styles.info}>{loggedUserData.belong}</h3>
			<img src={loggedUserData.img} className={styles.img} alt={`Photo of ${loggedUserData.name}`} />
			<p className={styles.name}>{loggedUserData.name}</p>
			<div className={styles.line} />
		</div>
	)
}

export default PersonalInfo
