import styles from './TimetableHead.module.css'

const TimetableHeading = () => {
	return (
		<thead className={styles.head}>
			<tr>
				<th>Num.</th>
				<th>Hours</th>
				<th>Monday</th>
				<th>Tuesday</th>
				<th>Wednesday</th>
				<th>Thursday</th>
				<th>Friday</th>
			</tr>
		</thead>
	)
}

export default TimetableHeading
