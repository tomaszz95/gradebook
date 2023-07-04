import styles from './GradesTableBody.module.css'
import GradesRow from './GradesRow'

const findAllSubjects = (subjectsObj: any) => {
	let subjectsArr = []
	for (const subject in subjectsObj) {
		subjectsArr.push(subject)
	}
	return subjectsArr
}

const GradesTableBody: React.FC<any> = ({ gradesSemesterData }) => {
	const subjectsArr = findAllSubjects(gradesSemesterData)

	return (
		<tbody className={styles.body}>
			{subjectsArr.map(subject => (
				<GradesRow subject={subject} subjectData={gradesSemesterData[subject]} key={subject} />
			))}
		</tbody>
	)
}

export default GradesTableBody
