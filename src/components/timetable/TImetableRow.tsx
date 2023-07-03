import styles from './TimetableRow.module.css'

const TimetableRow: React.FC<any> = ({ lessonsData }) => {
	console.log(lessonsData)
	return (
		<tr className={styles.row}>
			<td>Cell 1x1</td>
			<td>Cell 2x1</td>
			<td>Cell 3x1</td>
			<td>Cell 4x1</td>
			<td>Cell 5x1</td>
			<td>Cell 6x1</td>
			<td>Cell 7x1</td>
		</tr>
	)
}

export default TimetableRow
