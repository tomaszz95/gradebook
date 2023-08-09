import styles from './SingleTimetableCell.module.css'

type ComponentType = { subject: string | undefined; hall: string }

const SingleTimetableCell: React.FC<ComponentType> = ({ subject, hall }) => {
    return (
        <td className={styles.cell}>
            {subject ? <p className={styles.subject}>{subject}</p> : <p className={styles.free}>-</p>}
            {hall && <p className={styles.class}>Classroom {hall}</p>}
        </td>
    )
}

export default SingleTimetableCell
