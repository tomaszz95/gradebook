import styles from './GradesTableHead.module.css'

const GradesTableHead: React.FC<{ semester: string; gradesSemesterData: any; type: string }> = ({
	semester,
	gradesSemesterData,
	type,
}) => {
	return (
		<thead className={styles.head}>
			<tr>
				<th rowSpan={2}>{type === 'student' ? 'Subject' : '3A'}</th>
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
