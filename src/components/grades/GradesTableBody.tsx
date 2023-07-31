import { useSelector } from 'react-redux'

import GradesRow from './GradesRow'

import { findAllSubjects, findAllNames } from '../helpers/gradesHelpersFunctions'
import { LoginDataType, GradesNamesType } from '../helpers/types'
import styles from './GradesTableBody.module.css'

type ComponentType = {
	gradesSemesterData: GradesNamesType
}

const GradesTableBody: React.FC<ComponentType> = ({ gradesSemesterData }) => {
	const loginInfoData = useSelector<any, LoginDataType>(state => state.loginData)
	const isStudent = loginInfoData.role === 'student'
	let gradesArray

	if (isStudent) {
		gradesArray = findAllSubjects(gradesSemesterData[loginInfoData.name])
	} else {
		gradesArray = findAllNames(gradesSemesterData)
	}

	return (
		<tbody className={styles.body}>
			{gradesArray.map(item => (
				<GradesRow
					subject={item}
					subjectData={
						isStudent ? gradesSemesterData[loginInfoData.name][item] : gradesSemesterData[item][loginInfoData.belong]
					}
					key={item}
				/>
			))}
		</tbody>
	)
}

export default GradesTableBody
