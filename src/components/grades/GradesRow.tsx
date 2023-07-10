import styles from './GradesRow.module.css'
import SingleGrade from './SingleGrade'
import { countEndGrade, countAverage } from '../helpers/averageFunctions'

export const addBackgroundColor = (grade: string) => {
	let colorClass

	if (+grade < 1.99) {
		colorClass = styles.bad
	} else if (+grade < 2.99) {
		colorClass = styles.better
	} else if (+grade < 3.99) {
		colorClass = styles.medium
	} else {
		colorClass = styles.hight
	}
	return colorClass
}

const GradesRow: React.FC<any> = ({ subject, subjectData }) => {
	const averageGrade = countAverage(subjectData.Grades)
	const endMark = countEndGrade(averageGrade)
	const averageGradeColor = addBackgroundColor(averageGrade)
	const endMarkColor = addBackgroundColor(endMark)

	return (
		<tr className={styles.row}>
			<td className={styles.subject}>{subject}</td>
			<td>
				{subjectData.Pluses.map((data: any) => (
					<SingleGrade gradeData={data} key={Math.random()} />
				))}
			</td>
			<td>
				{subjectData.Grades.map((data: any) => (
					<SingleGrade gradeData={data} key={Math.random()} />
				))}
			</td>
			<td>
				<span className={averageGradeColor}>{averageGrade}</span>
			</td>
			<td>
				<span className={endMarkColor}>{endMark}</span>
			</td>
		</tr>
	)
}

export default GradesRow
