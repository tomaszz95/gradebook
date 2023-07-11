import SingleStats from './SingleStats'
import styles from './StatisticsBox.module.css'
import { useEffect, useState } from 'react'
import { countAverage } from '../helpers/averageFunctions'

const StatisticsBox: React.FC<any> = ({ personInfo, subjectsArr, wholeClassAverage, personType }) => {
	const [singleGrades, setSingleGrades] = useState([])

	useEffect(() => {
		let singleGradesTable = subjectsArr.map((subject: string) => {
			const subjectAverage = countAverage(personInfo[subject].Grades)
			return {
				subject,
				subjectAverage,
			}
		})
		console.log(singleGradesTable)
		setSingleGrades(singleGradesTable)
	}, [personInfo])

	console.log(singleGrades)

	return (
		<div className={styles.box}>
			<h3 className={styles.heading}>
				Average grades for <span className={styles.people}>{personType}</span>
			</h3>
			<SingleStats />
			<SingleStats />
		</div>
	)
}

export default StatisticsBox
