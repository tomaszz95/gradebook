import { useSelector } from 'react-redux'

import { LoginDataType } from '../helpers/types'
import styles from './GradesTableHead.module.css'

type ComponentType = { semester: string }

const GradesTableHead: React.FC<ComponentType> = ({ semester }) => {
	const loginInfoData = useSelector<any, LoginDataType>(state => state.loginData)

	return (
		<thead className={styles.head}>
			<tr>
				<th rowSpan={2}>{loginInfoData.role === 'student' ? 'Subject' : 'Students'}</th>
				<th colSpan={4} className={styles.subject}>
					{semester}
				</th>
			</tr>
			<tr>
				<th>Pluses / Minuses</th>
				<th>Grades</th>
				<th>Average</th>
				<th>Mark</th>
			</tr>
		</thead>
	)
}

export default GradesTableHead
