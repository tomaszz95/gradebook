import TimetableHead from './TimetableHead'
import TimetableBody from './TimetableBody'

import { TimetableDataType } from '../helpers/types'
import styles from './TimetableTable.module.css'

type ComponentType = { lessonsTimetable: TimetableDataType }

const TimetableTable: React.FC<ComponentType> = ({ lessonsTimetable }) => {
	return (
		<table className={styles.table}>
			<TimetableHead />
			<TimetableBody lessonsTimetable={lessonsTimetable} />
		</table>
	)
}

export default TimetableTable
