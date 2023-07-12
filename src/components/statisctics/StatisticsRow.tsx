import styles from './StatisticsRow.module.css'
import { countAverage } from '../helpers/averageFunctions'

const addBackgroundColor = (grade: string) => {
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
			<td>
				<span className={gradeColor}>{averageGrade !== 'NaN' ? averageGrade : 'No grades yet'}</span>
			</td>
			<td>
				<span className={averageColor}>{classAverage !== 'NaN' ? classAverage : 'No grades yet'}</span>
			</td>
		</tr>
	)
}

export default StatisticsRow
