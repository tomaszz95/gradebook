import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import StatisticsContent from './StatisticsContent'

import { LoginDataType, GradesListType, StatisticsObjectStudentDataType } from '../helpers/types'
import { statisticsStudentData } from '../helpers/gradesHelpersFunctions'
import styles from './StatisticsView.module.css'
import LoadingSpinner from '../UI/LoadingSpinner'

const StatisticsView = () => {
	const loginInfoData = useSelector<any, LoginDataType>(state => state.loginData)
	const [gradesList, setGradesList] = useState<StatisticsObjectStudentDataType[] | undefined>()

	useEffect(() => {
		if (loginInfoData.email !== '') {
			if (loginInfoData.role === 'student') {
				fetch('/api/grades')
					.then(response => response.json())
					.then(data => {
						const filteredGradesArr: [GradesListType] = data.grades.filter(
							(gradesArr: GradesListType) => gradesArr.class === loginInfoData.belong
						)
						const studentData = statisticsStudentData(filteredGradesArr[0])
						setGradesList(studentData)
					})
			}
			if (loginInfoData.role === 'teacher') {
				fetch('/api/statistics')
					.then(response => response.json())
					.then(data => {
						setGradesList(data.grades)
					})
			}
		}
	}, [loginInfoData])

	return (
		<div className={styles.container}>
			<h2 className={styles.header}>
				{loginInfoData.role === 'student'
					? "Check your and your class' statistics!"
					: "Check class' and school's statistics in your subject!"}
			</h2>
			{loginInfoData && (
				<span className={styles.name}>
					{loginInfoData.name} - {loginInfoData.belong}
				</span>
			)}
			{gradesList === undefined ? (
				<LoadingSpinner loading={gradesList === undefined} />
			) : (
				<StatisticsContent
					classData={gradesList}
					studentName={loginInfoData.name}
					role={loginInfoData.role}
					subject={loginInfoData.belong}
				/>
			)}
		</div>
	)
}

export default StatisticsView
