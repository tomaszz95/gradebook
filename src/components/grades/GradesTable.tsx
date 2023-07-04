import styles from './GradesTable.module.css'
import GradesTableHead from './GradesTableHead'
import GradesTableBody from './GradesTableBody'

const GradesTable: React.FC<any> = ({ gradesData }) => {
	return (
		<>
			<table className={styles.table}>
				<GradesTableHead semester='Semester 1' />
				<GradesTableBody gradesSemesterData={gradesData['Semester 1']} />
			</table>
			<table className={styles.table}>
				<GradesTableHead semester='Semester 2' />
				<GradesTableBody gradesSemesterData={gradesData['Semester 2']} />
			</table>
		</>
	)
}

export default GradesTable
