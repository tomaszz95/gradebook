import { useState, useEffect } from 'react'

import StatisticsBox from './StatisticsBox'
import StatisticsTable from './StatisticsTable'

import { StatisticsObjectStudentDataType, StatisticsSubjectsType } from '../helpers/types'
import {
	findAllSubjects,
	countStatisticsWholeClassAverage,
	countWholeSchoolAverage,
} from '../helpers/gradesHelpersFunctions'
import styles from './StatisticsContent.module.css'

type ComponentType = {
	classData: StatisticsObjectStudentDataType[]
	studentName: string | undefined
	subject: string | undefined
	role: string
}

const StatisticsContent: React.FC<ComponentType> = ({ classData, studentName, role, subject }) => {
	const [semester, setSemester] = useState<string>('Semester 1')
	const [studentData, setStudentData] = useState<StatisticsSubjectsType[]>([])

	let tableRowOptionsArr: any
	let classAverage: any

	if (role === 'student') {
		tableRowOptionsArr = findAllSubjects(classData[0].averages['Semester 1'])
		classAverage = countStatisticsWholeClassAverage(classData, semester, tableRowOptionsArr)
	} else {
		tableRowOptionsArr = classData.map(data => data.class)
		classAverage = countWholeSchoolAverage(classData, semester, tableRowOptionsArr, subject)
	}

	const changeSemesterHandler = (changedSemester: string) => {
		changedSemester === 'Semester 1' ? setSemester('Semester 1') : setSemester('Semester 2')
	}

	useEffect(() => {
		if (studentName) {
			let fetchedData
			if (role === 'student') {
				fetchedData = classData.find(name => name.name === studentName)
			}

			if (fetchedData !== undefined) {
				// @ts-ignore
				const semesterData = fetchedData.averages[semester]

				if (semesterData !== undefined) {
					setStudentData([semesterData])
				}
			}

			if (role === 'teacher') {
				let classAvg: any = []

				tableRowOptionsArr.map((classN: string) => {
					classData.map(gradeData => {
						if (gradeData.class === classN) {
							// @ts-ignore
							classAvg.push({ subject: classN, average: gradeData.averages[semester][subject] })
						}
					})
				})
				if (classAvg !== undefined) {
					setStudentData(classAvg)
				}
			}
		}
	}, [semester])

	return (
		<div className={styles.container}>
			<StatisticsTable
				gradesData={studentData}
				tableRowOptions={tableRowOptionsArr}
				wholeClassAverage={classAverage}
				onChangeSemesterHandler={changeSemesterHandler}
				semester={semester}
				role={role}
			/>
			<div className={styles.boxes}>
				<StatisticsBox
					personInfo={studentData}
					role={role}
					belong={subject}
					studentName={studentName}
					classBox={false}
				/>
				{role === 'student' ? (
					<StatisticsBox
						personInfo={classAverage}
						role={role}
						belong={subject}
						studentName={studentName}
						classBox={true}
					/>
				) : (
					''
				)}
			</div>
		</div>
	)
}

export default StatisticsContent
