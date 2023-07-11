import StatisticsRow from './StatisticsRow'
import styles from './StatisticsTable.module.css'

const StatisticsTable: React.FC<any> = ({
	personInfo,
	subjectsArr,
	wholeClassAverage,
	onChangeSemesterHandler,
	semesterOne,
}) => {
	const semesterHandler = (e: React.SyntheticEvent) => {
		onChangeSemesterHandler(e.currentTarget.textContent)
	}

	return (
		<div className={styles.content}>
			<div className={styles.buttons}>
				<button onClick={semesterHandler} className={semesterOne ? styles.active : ''}>
					Semester 1
				</button>
				<button onClick={semesterHandler} className={semesterOne ? '' : styles.active}>
					Semester 2
				</button>
			</div>
			<table className={styles.table}>
				<thead className={styles.head}>
					<tr>
						<th>Subject</th>
						<th>Yours average</th>
						<th>Class average</th>
					</tr>
				</thead>
				<tbody className={styles.body}>
					{subjectsArr.map((subject: any) => {
						return (
							<StatisticsRow
								subject={subject}
								subjectGrades={personInfo[subject].Grades}
								key={subject}
								classAverage={wholeClassAverage[subject].average}
							/>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default StatisticsTable
