import styles from './StatisticsContent.module.css'
import StatisticsBox from './StatisticsBox'
import StatisticsTable from './StatisticsTable'
import { useState } from 'react'
import { countWholeClassAverage } from '../helpers/averageFunctions'

const dummyName = 'Jacek Kowalski'

const findAllSubjects = (subjectsObj: any) => {
	let subjectsArr = []
	for (const subject in subjectsObj) {
		subjectsArr.push(subject)
	}
	return subjectsArr
}

const StatisticsContent: React.FC<any> = ({ classData, schoolClassName }) => {
	const [isSemesterOne, setIsSemesterOne] = useState(true)

	const stringSemester = isSemesterOne ? 'Semester 1' : 'Semester 2'

	const singleSemesterData = classData[dummyName][stringSemester]
	const subjectsArr = findAllSubjects(singleSemesterData)

	const wholeClassAverage = countWholeClassAverage(classData, stringSemester, subjectsArr)

	const changeSemesterHandler = (semester: string) => {
		semester === 'Semester 1' ? setIsSemesterOne(true) : setIsSemesterOne(false)
	}

	return (
		<div className={styles.container}>
			<StatisticsTable
				personInfo={singleSemesterData}
				subjectsArr={subjectsArr}
				wholeClassAverage={wholeClassAverage}
				onChangeSemesterHandler={changeSemesterHandler}
				semesterOne={isSemesterOne}
			/>
			<div className={styles.boxes}>
				<StatisticsBox
					personInfo={singleSemesterData}
					subjectsArr={subjectsArr}
					wholeClassAverage={wholeClassAverage}
					personType={dummyName}
				/>
				<StatisticsBox
					personInfo={singleSemesterData}
					subjectsArr={subjectsArr}
					wholeClassAverage={wholeClassAverage}
					personType={`${schoolClassName} class`}
				/>
			</div>
		</div>
	)
}

export default StatisticsContent
