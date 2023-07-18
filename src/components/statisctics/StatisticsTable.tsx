import StatisticsRow from './StatisticsRow'
import styles from './StatisticsTable.module.css'

const StatisticsTable: React.FC<any> = ({
	personInfo,
	subjectsArr,
	wholeClassAverage,
	onChangeSemesterHandler,
	semesterOne,
	isStudent,
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
						<th>{isStudent ? 'Subject' : 'Class'}</th>
						<th>{isStudent ? 'Yours average' : 'Class average'}</th>
						<th>{isStudent ? 'Class average' : 'School average'}</th>
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
								isStudent={isStudent}
								wholeClassAverage={wholeClassAverage}
							/>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}

export default StatisticsTable
