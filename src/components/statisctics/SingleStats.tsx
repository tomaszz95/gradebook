import SingleGradeSubject from './SingleGradeSubject'
import styles from './SingleStats.module.css'
import { useEffect, useState } from 'react'

const SingleStats: React.FC<any> = ({ averageData, componentFor }) => {
	const [averageFilteredData, setAverageFilteredData] = useState<any>()

	useEffect(() => {
		if (averageData.length === 0) return
		const sortedData = [...averageData].sort((a, b) => +a.subjectAverage - +b.subjectAverage)

		if (componentFor.includes('Best')) {
			setAverageFilteredData(sortedData.slice(-3))
		} else {
			setAverageFilteredData(sortedData.slice(0, 3))
		}
	}, [averageData])
	
	return (
		<div className={styles.box}>
			<p className={styles.title}>{componentFor}:</p>
			<div className={styles.container}>
				<SingleGradeSubject averageArrayData={averageFilteredData} />
			</div>
		</div>
	)
}

export default SingleStats
