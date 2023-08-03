import { useState } from 'react'

import StatisticsBox from './StatisticsBox'
import StatisticsTable from './StatisticsTable'
import LoadingSpinner from '../UI/LoadingSpinner'

import { StatisticsObjectStudentDataType } from '../helpers/types'
import { findAllSubjects, countStatisticsWholeClassAverage } from '../helpers/gradesHelpersFunctions'
import styles from './StatisticsContent.module.css'

type ComponentType = {
	classData: StatisticsObjectStudentDataType[] | undefined
	studentName: string | undefined
	role: string
}

const StatisticsContent: React.FC<ComponentType> = ({ classData, studentName, role }) => {
	if (classData === undefined) {
		return <LoadingSpinner loading={classData === undefined} />
	}
	const [semester, setSemester] = useState<string>('Semester 1')

	const subjectsArr = findAllSubjects(classData[0].averages['Semester 1'])
	const wholeClassAverage = countStatisticsWholeClassAverage(classData, semester, subjectsArr)

	const changeSemesterHandler = (changedSemester: string) => {
		changedSemester === 'Semester 1' ? setSemester('Semester 1') : setSemester('Semester 2')
	}

	return (
		<div className={styles.container}>
			<StatisticsTable
				gradesData={classData}
				subjectsArr={subjectsArr}
				wholeClassAverage={wholeClassAverage}
				onChangeSemesterHandler={changeSemesterHandler}
				semester={semester}
				role={role}
			/>
			{/* <div className={styles.boxes}>
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
