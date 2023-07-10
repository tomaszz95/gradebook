import StatisticsRow from './StatisticsRow'
import styles from './StatisticsTable.module.css'

const StatisticsTable: React.FC<any> = ({ personInfo, subjectsArr, wholeClassAverage }) => {
	return (
		<table>
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
	)
}

export default StatisticsTable
