import styles from './GradesTableHead.module.css'

const GradesTableHead: React.FC<{ semester: string }> = ({ semester }) => {
	return (
		<thead className={styles.head}>
			<tr>
				<th rowSpan={2}>Subject</th>
				<th colSpan={4} className={styles.subject}>
					{semester}
				</th>
			</tr>
			<tr>
				<th>Pluses</th>
				<th>Subgrades</th>
				<th>Average</th>
				<th>Mark</th>
			</tr>
		</thead>
	)
}

export default GradesTableHead
