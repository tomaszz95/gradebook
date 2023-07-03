import TimetableHead from './TimetableHead'
import TimetableBody from './TimetableBody'
import styles from './TimetableTable.module.css'

const TimetableTable: React.FC<any> = ({ lessonsTimetable }) => {
	return (
		<table className={styles.table}>
			<TimetableHead />
			<TimetableBody lessonsTimetable={lessonsTimetable} />
		</table>
	)
}

export default TimetableTable
