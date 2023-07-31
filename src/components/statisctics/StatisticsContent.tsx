import styles from './StatisticsContent.module.css'
import StatisticsBox from './StatisticsBox'
import StatisticsTable from './StatisticsTable'
import { useState } from 'react'
import { countWholeClassAverage } from '../helpers/gradesHelpersFunctions'

const dummyName = 'Jacek Kowalski'

const findAllSubjects = (subjectsObj: any) => {
	let subjectsArr = []
	for (const subject in subjectsObj) {
		subjectsArr.push(subject)
	}
	return subjectsArr
}

const StatisticsContent: React.FC<any> = ({ classData, schoolClassName, isStudent }) => {
	const [isSemesterOne, setIsSemesterOne] = useState(true)

	const stringSemester = isSemesterOne ? 'Semester 1' : 'Semester 2'

	const singleSemesterData = isStudent ? classData[dummyName][stringSemester] : classData[stringSemester]
	const subjectsArr = findAllSubjects(singleSemesterData)

	const wholeClassAverage = countWholeClassAverage(classData, stringSemester, subjectsArr, isStudent)

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
				isStudent={isStudent}
			/>
			<div className={styles.boxes}>
				<StatisticsBox
					personInfo={singleSemesterData}
					subjectsArr={subjectsArr}
					wholeClassAverage={wholeClassAverage}
					personType={dummyName}
					isStudent={isStudent}
				/>
				{isStudent ? (
					<StatisticsBox
						personInfo={singleSemesterData}
						subjectsArr={subjectsArr}
						wholeClassAverage={wholeClassAverage}
						personType={`${schoolClassName} class`}
					/>
				) : (
					''
				)}
			</div>
		</div>
	)
}

export default StatisticsContent
