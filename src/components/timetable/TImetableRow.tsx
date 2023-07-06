import SingleTimetableCell from './SingleTimetableCell'
import styles from './TimetableRow.module.css'

const TimetableRow: React.FC<any> = ({ lessonsData, number, hours }) => {
	return (
		<tr className={styles.row}>
			<th>{number}</th>
			<th>{hours}</th>
			<SingleTimetableCell subject={lessonsData.Monday.subject} hall={lessonsData.Monday.class} />
			<SingleTimetableCell subject={lessonsData.Tuesday.subject} hall={lessonsData.Tuesday.class} />
			<SingleTimetableCell subject={lessonsData.Wednesday.subject} hall={lessonsData.Wednesday.class} />
			<SingleTimetableCell subject={lessonsData.Thursday.subject} hall={lessonsData.Thursday.class} />
			<SingleTimetableCell subject={lessonsData.Friday.subject} hall={lessonsData.Friday.class} />
		</tr>
	)
}

export default TimetableRow
