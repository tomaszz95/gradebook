import styles from './StatisticsRow.module.css'
import { countAverage } from '../helpers/averageFunctions'

const StatisticsRow: React.FC<any> = ({ subject, subjectGrades, classAverage }) => {
	const averageGrade = countAverage(subjectGrades)

	return (
		<tr className={styles.row}>
			<td className={styles.subject}>{subject}</td>
			<td className={styles.average}>{averageGrade}</td>
			<td className={styles.average}>{classAverage}</td>
		</tr>
	)
}

export default StatisticsRow
