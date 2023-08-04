import StatisticsRow from './StatisticsRow'

import { StatisticsSubjectsType } from '../helpers/types'
import styles from './StatisticsTable.module.css'

type ComponentType = {
	gradesData: StatisticsSubjectsType[]
	tableRowOptions: string[]
	wholeClassAverage: { [key: string]: string }[] | string
	onChangeSemesterHandler: (changedSemester: string) => void
	semester: string
	role: string
}

const StatisticsTable: React.FC<ComponentType> = ({
	gradesData,
	tableRowOptions,
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

	return (
		<div className={styles.content}>
			<div className={styles.buttons}>
				<button onClick={semesterHandler} className={semester === 'Semester 1' ? styles.active : ''}>
					Semester 1
				</button>
				<button onClick={semesterHandler} className={semester === 'Semester 1' ? '' : styles.active}>
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
					{tableRowOptions.map((subject: any) => {
						if (role === 'student') {
							if (typeof wholeClassAverage !== 'string') {
								const subjectClassAverage = wholeClassAverage.find(item => item.subject === subject)
								if (subjectClassAverage === undefined || gradesData.length === 0) return

								return (
									<StatisticsRow
										subject={subject}
										subjectGrades={gradesData[0][subject]}
										key={subject}
										classAverage={subjectClassAverage.average}
									/>
								)
							}
						} else if (role === 'teacher') {
							if (typeof wholeClassAverage === 'string' && gradesData.length > 0) {
								const singleClassAverage = gradesData.filter(item => item.subject === subject)

								return (
									<StatisticsRow
										subject={subject}
										subjectGrades={singleClassAverage[0].average}
										key={subject}
										classAverage={wholeClassAverage}
									/>
								)
							}
						}
					})}
				</tbody>
			</table>
		</div>
	)
}

export default StatisticsTable
