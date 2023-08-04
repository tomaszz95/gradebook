import { useEffect, useState } from 'react'

import SingleGradeSubject from './SingleGradeSubject'

import { StatisticsSubjectsType } from '../helpers/types'
import styles from './SingleStats.module.css'

type ComponentType = {
	averageData: StatisticsSubjectsType[]
	componentFor: string
	role: string
}

const SingleStats: React.FC<ComponentType> = ({ averageData, componentFor, role }) => {
	const [averageFilteredData, setAverageFilteredData] = useState<StatisticsSubjectsType[]>([])

	useEffect(() => {
		if (averageData.length === 0) return
		if (role === 'student' && !averageData[0].subject) {
			const studentArray = []
			for (const subject in averageData[0]) {
				studentArray.push({ subject: subject, average: averageData[0][subject] })
			}

			const sortedData = [...studentArray].sort((a, b) => +a.average - +b.average)

			if (componentFor.includes('Best')) {
				setAverageFilteredData(sortedData.slice(-3))
			} else {
				setAverageFilteredData(sortedData.slice(0, 3))
			}
		} else {
			const sortedData = [...averageData].sort((a, b) => +a.average - +b.average)

			if (componentFor.includes('Best')) {
				setAverageFilteredData(sortedData.slice(-3))
			} else {
				setAverageFilteredData(sortedData.slice(0, 3))
			}
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
