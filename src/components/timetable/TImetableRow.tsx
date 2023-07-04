import styles from './TimetableRow.module.css'

const TimetableRow: React.FC<any> = ({ lessonsData, number, hours }) => {
	return (
		<tr className={styles.row}>
			<th>{number}</th>
			<th>{hours}</th>
			<td>
				{lessonsData.Monday.subject ? (
					<p className={styles.subject}>{lessonsData.Monday.subject}</p>
				) : (
					<p className={styles.free}>-</p>
				)}
				{lessonsData.Monday.class && <p className={styles.class}>Room {lessonsData.Monday.class}</p>}
			</td>
			<td>
				{lessonsData.Tuesday.subject ? (
					<p className={styles.subject}>{lessonsData.Tuesday.subject}</p>
				) : (
					<p className={styles.free}>-</p>
				)}
				{lessonsData.Tuesday.class && <p className={styles.class}>Room {lessonsData.Tuesday.class}</p>}
			</td>
			<td>
				{lessonsData.Wednesday.subject ? (
					<p className={styles.subject}>{lessonsData.Wednesday.subject}</p>
				) : (
					<p className={styles.free}>-</p>
				)}
				{lessonsData.Wednesday.class && <p className={styles.class}>Room {lessonsData.Wednesday.class}</p>}
			</td>
			<td>
				{lessonsData.Thursday.subject ? (
					<p className={styles.subject}>{lessonsData.Thursday.subject}</p>
				) : (
					<p className={styles.free}>-</p>
				)}
				{lessonsData.Thursday.class && <p className={styles.class}>Room {lessonsData.Thursday.class}</p>}
			</td>
			<td>
				{lessonsData.Friday.subject ? (
					<p className={styles.subject}>{lessonsData.Friday.subject}</p>
				) : (
					<p className={styles.free}>-</p>
				)}
				{lessonsData.Friday.class && <p className={styles.class}>Room {lessonsData.Friday.class}</p>}
			</td>
		</tr>
	)
}

export default TimetableRow
