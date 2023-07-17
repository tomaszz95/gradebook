import styles from './GradesTableBody.module.css'
import GradesRow from './GradesRow'

const findAllObjects = (subjectsObj: any) => {
	let subjectsArr = []
	for (const subject in subjectsObj) {
		subjectsArr.push(subject)
	}
	return subjectsArr
}

const GradesTableBody: React.FC<any> = ({ gradesSemesterData, type }) => {
	const subjectsOrPersonsArray = findAllObjects(gradesSemesterData)

	return (
		<tbody className={styles.body}>
			{subjectsOrPersonsArray.map(item => (
				<GradesRow subject={item} subjectData={gradesSemesterData[item]} key={item} />
			))}
		</tbody>
	)
}

export default GradesTableBody
