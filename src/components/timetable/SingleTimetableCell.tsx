import styles from './SingleTimetableCell.module.css'

const SingleTimetableCell: React.FC<any> = ({ subject, hall }) => {
	return (
		<td className={styles.cell}>
			{subject ? <p className={styles.subject}>{subject}</p> : <p className={styles.free}>-</p>}
			{hall && <p className={styles.class}>Room {hall}</p>}
		</td>
	)
}

export default SingleTimetableCell
