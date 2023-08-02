import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import StatisticsContent from './StatisticsContent'

import { LoginDataType, GradesListType, StatisticsStudentDataType } from '../helpers/types'
import { statisticsStudentData } from '../helpers/gradesHelpersFunctions'
import styles from './StatisticsView.module.css'

const StatisticsView = () => {
	const loginInfoData = useSelector<any, LoginDataType>(state => state.loginData)
	const [gradesList, setGradesList] = useState<StatisticsStudentDataType | undefined>()

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
						console.log(studentData)
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
					? 'Check your and yours class statistics!'
					: 'Check classes and school statistics in your subject!'}
			</h2>
			{loginInfoData && (
				<span className={styles.name}>
					{loginInfoData.name} - {loginInfoData.belong}
				</span>
			)}

			<StatisticsContent classData={gradesList} studentName={loginInfoData.name} role={loginInfoData.role} />
		</div>
	)
}

export default StatisticsView
