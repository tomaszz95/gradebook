import GradesTableHead from './GradesTableHead'
import GradesTableBody from './GradesTableBody'

import { GradesListContentType } from '../helpers/types'
import styles from './GradesTable.module.css'

type ComponentType = {
	gradesList: GradesListContentType
}

const GradesTable: React.FC<ComponentType> = ({ gradesList }) => {
	return (
		<>
			<table className={styles.table}>
				<GradesTableHead semester='Semester 1' />
				<GradesTableBody gradesSemesterData={gradesList['Semester 1']} />
			</table>
			<table className={styles.table}>
				<GradesTableHead semester='Semester 2' />
				<GradesTableBody gradesSemesterData={gradesList['Semester 2']} />
			</table>
		</>
	)
}

export default GradesTable
