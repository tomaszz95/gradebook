import { addBackgroundColor } from '../helpers/gradesHelpersFunctions'

import styles from './StatisticsRow.module.css'

type ComponentType = {
	subject: string
	subjectGrades: any
	classAverage: string
}

const StatisticsRow: React.FC<ComponentType> = ({ subject, subjectGrades, classAverage }) => {
	const subjectGrade = addBackgroundColor(subjectGrades)
	const averageColor = addBackgroundColor(classAverage)

	return (
		<tr className={styles.row}>
			<td>{subject}</td>
			<td>
				<span className={subjectGrade}>{subjectGrades !== 'NaN' ? subjectGrades : 'No grades yet'}</span>
			</td>
			<td>
				<span className={averageColor}>{classAverage ? classAverage : 'No grades yet'}</span>
			</td>
		</tr>
	)
}

export default StatisticsRow
