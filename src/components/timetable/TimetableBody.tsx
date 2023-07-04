import styles from './TimetableBody.module.css'
import TimetableRow from './TimetableRow'

const TimetableBody: React.FC<any> = ({ lessonsTimetable }) => {
	return (
		<tbody className={styles.body}>
			<TimetableRow lessonsData={lessonsTimetable[1]} number='1' hours='8.00-8.45' />
			<TimetableRow lessonsData={lessonsTimetable[2]} number='2' hours='8.50-9.35' />
			<TimetableRow lessonsData={lessonsTimetable[3]} number='3' hours='9.45-10.30' />
			<TimetableRow lessonsData={lessonsTimetable[4]} number='4' hours='10.40-11.25' />
			<TimetableRow lessonsData={lessonsTimetable[5]} number='5' hours='11.40-12.25' />
			<TimetableRow lessonsData={lessonsTimetable[6]} number='6' hours='12.30-13.15' />
			<TimetableRow lessonsData={lessonsTimetable[7]} number='7' hours='13.25-14.10' />
		</tbody>
	)
}

export default TimetableBody
