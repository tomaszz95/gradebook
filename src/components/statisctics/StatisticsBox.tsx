import SingleStats from './SingleStats'
import styles from './StatisticsBox.module.css'
import { useEffect, useState } from 'react'
import { countAverage } from '../helpers/averageFunctions'

const StatisticsBox: React.FC<any> = ({ personInfo, subjectsArr, wholeClassAverage, personType }) => {
	const [singleGrades, setSingleGrades] = useState([])
	const [classGrades, setClassGrades] = useState([])

	useEffect(() => {
		let singleGradesArr = subjectsArr.map((subject: string) => {
			const subjectAverage = countAverage(personInfo[subject].Grades)
			return {
				subject,
				subjectAverage,
			}
		})
		setSingleGrades(singleGradesArr)

		let classGradesArr: any = []
		for (const data in wholeClassAverage) {
			classGradesArr.push({ subject: data, subjectAverage: wholeClassAverage[data].average })
		}

		setClassGrades(classGradesArr)
	}, [subjectsArr, personInfo])

	return (
		<div className={styles.box}>
			<h3 className={styles.heading}>
				Average grades for <span>{personType}</span>
			</h3>
			<div className={styles.line}></div>
			<SingleStats
				averageData={personType.includes('class') ? classGrades : singleGrades}
				componentFor='Best average subjects grades'
			/>
			<SingleStats
				averageData={personType.includes('class') ? classGrades : singleGrades}
				componentFor='Worst average subjects grades'
			/>
		</div>
	)
}

export default StatisticsBox
