import { useSelector } from 'react-redux'

import GradesRow from './GradesRow'

import { findAllObjects } from '../helpers/gradesHelpersFunctions'
import { LoginDataType, GradesNamesType } from '../helpers/types'
import styles from './GradesTableBody.module.css'

type ComponentType = {
	gradesSemesterData: GradesNamesType
}

const GradesTableBody: React.FC<ComponentType> = ({ gradesSemesterData }) => {
	const loginInfoData = useSelector<any, LoginDataType>(state => state.loginData)
	const gradesArray = findAllObjects(gradesSemesterData[loginInfoData.name])
	console.log(gradesSemesterData)
	return (
		<tbody className={styles.body}>
			{gradesArray.map(item => (
				<GradesRow subject={item} subjectData={gradesSemesterData[loginInfoData.name][item]} key={item} />
			))}
		</tbody>
	)
}

export default GradesTableBody
