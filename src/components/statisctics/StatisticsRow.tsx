import styles from './StatisticsRow.module.css'
import { countAverage } from '../helpers/averageFunctions'

export const addBackgroundColor = (grade: string) => {
	let colorClass

	if (+grade < 1.99) {
		colorClass = styles.bad
	} else if (+grade < 2.99) {
		colorClass = styles.better
	} else if (+grade < 3.99) {
		colorClass = styles.medium
	} else if (grade === '-') {
		colorClass = styles.bad
	} else {
		colorClass = styles.hight
	}
	return colorClass
}

const StatisticsRow: React.FC<any> = ({ subject, subjectGrades, classAverage }) => {
	const averageGrade = countAverage(subjectGrades)
	const gradeColor = addBackgroundColor(subjectGrades)
	const averageColor = addBackgroundColor(classAverage)
	
	return (
		<tr className={styles.row}>
			<td>{subject}</td>
			<td className={gradeColor}>{averageGrade !== 'NaN' ? averageGrade : 'No grades yet'}</td>
			<td className={averageColor}>{classAverage !== 'NaN' ? classAverage : 'No grades yet'}</td>
		</tr>
	)
}

export default StatisticsRow
