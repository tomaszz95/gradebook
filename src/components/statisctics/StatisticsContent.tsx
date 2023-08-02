import { useState } from 'react'

import StatisticsBox from './StatisticsBox'
import StatisticsTable from './StatisticsTable'
import LoadingSpinner from '../UI/LoadingSpinner'

import { StatisticsStudentDataType } from '../helpers/types'
import { findAllSubjects } from '../helpers/gradesHelpersFunctions'
import styles from './StatisticsContent.module.css'

type ComponentType = {
	classData: StatisticsStudentDataType | undefined
	studentName: string | undefined
	role: string
}

const StatisticsContent: React.FC<ComponentType> = ({ classData, studentName, role }) => {
	if (classData === undefined) {
		return <LoadingSpinner loading={classData === undefined} />
	}
	console.log(classData)
	// const subjectsArr = findAllSubjects(singleSemesterData)

	// const wholeClassAverage = countWholeClassAverage(classData, stringSemester, subjectsArr, isStudent)

	// const changeSemesterHandler = (semester: string) => {
	// 	semester === 'Semester 1' ? setIsSemesterOne(true) : setIsSemesterOne(false)
	// }

	return (
		<div className={styles.container}>
			{/* <StatisticsTable
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
			</div> */}
		</div>
	)
}

export default StatisticsContent
