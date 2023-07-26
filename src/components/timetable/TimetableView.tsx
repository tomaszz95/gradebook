import styles from './TimetableView.module.css'
import TimetableTable from './TimeTableTable'
import { useRouter } from 'next/router'

const TimeTable = () => {
	const router = useRouter()
	const timetableArray = router.pathname.includes('student') ? timetable1A : timetableTeacher

	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Check your lessons!</h2>
			<TimetableTable lessonsTimetable={timetableArray} />
		</div>
	)
}

export default TimeTable
