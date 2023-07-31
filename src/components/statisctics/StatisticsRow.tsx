import styles from './StatisticsRow.module.css'
import { countAverage } from '../helpers/gradesHelpersFunctions'

const addBackgroundColor = (grade: string | number) => {
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

const StatisticsRow: React.FC<any> = ({ subject, subjectGrades, classAverage, isStudent, wholeClassAverage }) => {
	let averageGrade
	let gradeColor
	let averageColor
	let schoolAverage: any = 0

	if (isStudent) {
		averageGrade = countAverage(subjectGrades)
		gradeColor = addBackgroundColor(subjectGrades)
		averageColor = addBackgroundColor(classAverage)
	} else {
		averageGrade = classAverage
		gradeColor = addBackgroundColor(averageGrade)
		for (const data in wholeClassAverage) {
			schoolAverage = schoolAverage + +wholeClassAverage[data].average / 9
		}
		schoolAverage = schoolAverage.toFixed(2)
		averageColor = addBackgroundColor(schoolAverage)
	}

	return (
		<tr className={styles.row}>
			<td>{subject}</td>
			<td>
				<span className={gradeColor}>{averageGrade !== 'NaN' ? averageGrade : 'No grades yet'}</span>
			</td>
			<td>
				<span className={averageColor}>{schoolAverage ? schoolAverage : 'No grades yet'}</span>
			</td>
		</tr>
	)
}

export default StatisticsRow
