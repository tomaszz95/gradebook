import StatisticsRow from './StatisticsRow'

import { StatisticsObjectStudentDataType } from '../helpers/types'
import styles from './StatisticsTable.module.css'

type ComponentType = {
	gradesData: StatisticsObjectStudentDataType[]
	subjectsArr: [{ [subject: string]: string }]
	wholeClassAverage: [{ [subject: string]: string; average: string }]
	onChangeSemesterHandler: (changedSemester: string) => void
	semester: string
	role: string
}

const StatisticsTable: React.FC<ComponentType> = ({
	gradesData,
	subjectsArr,
	wholeClassAverage,
	onChangeSemesterHandler,
	semester,
	role,
}) => {
	const semesterHandler = (e: React.SyntheticEvent) => {
		if (e.currentTarget.textContent) {
			onChangeSemesterHandler(e.currentTarget.textContent)
		}
	}
	console.log(gradesData)
	return (
		<div className={styles.content}>
			<div className={styles.buttons}>
				<button onClick={semesterHandler} className={semester === 'Semester 1' ? styles.active : ''}>
					Semester 1
				</button>
				<button onClick={semesterHandler} className={semester === 'Semester 2' ? '' : styles.active}>
					Semester 2
				</button>
			</div>
			<table className={styles.table}>
				<thead className={styles.head}>
					<tr>
						<th>{role === 'student' ? 'Subject' : 'Class'}</th>
						<th>{role === 'student' ? 'Yours average' : 'Class average'}</th>
						<th>{role === 'student' ? 'Class average' : 'School average'}</th>
					</tr>
				</thead>
				<tbody className={styles.body}>
					{subjectsArr.map((gradesArr: StatisticsObjectStudentDataType) => {
						return (
							<StatisticsRow
								subject={subject}
								subjectGrades={gradesData[subject].Grades}
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
