import styles from './SingleGradeSubject.module.css'

const addBackgroundColor = (grade: string) => {
	let colorClass

	if (+grade < 1.99) {
		colorClass = styles.bad
	} else if (+grade < 2.99) {
		colorClass = styles.better
	} else if (+grade < 3.99) {
		colorClass = styles.medium
	} else if (grade === '-') {
		colorClass = styles.bad
	} else {
		colorClass = styles.hight
	}
	return colorClass
}

const SingleGradeSubject: React.FC<any> = ({ averageArrayData }) => {
	if (averageArrayData === undefined) return <div>Loading...</div>

	return (
		<>
			{averageArrayData.map((item: any) => (
				<div className={styles.box} key={Math.random()}>
					<span className={styles.subject}>{item.subject}</span>
					<span className={addBackgroundColor(item.subjectAverage)}>{item.subjectAverage}</span>
				</div>
			))}
		</>
	)
}

export default SingleGradeSubject
