import styles from './GradesTable.module.css'
import GradesTableHead from './GradesTableHead'
import GradesTableBody from './GradesTableBody'
import { useRouter } from 'next/router'

const GradesTable: React.FC<any> = ({ gradesData }) => {
	const router = useRouter()
	const loginType = router.pathname.includes('student') ? 'student' : 'teacher'

	return (
		<>
			<table className={styles.table}>
				<GradesTableHead semester='Semester 1' gradesSemesterData={gradesData['Semester 1']} type={loginType} />
				<GradesTableBody gradesSemesterData={gradesData['Semester 1']} type={loginType} />
			</table>
			<table className={styles.table}>
				<GradesTableHead semester='Semester 2' gradesSemesterData={gradesData['Semester 2']} type={loginType} />
				<GradesTableBody gradesSemesterData={gradesData['Semester 2']} type={loginType} />
			</table>
		</>
	)
}

export default GradesTable
