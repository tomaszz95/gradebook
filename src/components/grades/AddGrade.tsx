import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import AddGradeForm from './AddGradeForm'
import LoadingSpinner from '../UI/LoadingSpinner'

import { findAllNames } from '../helpers/gradesHelpersFunctions'
import { LoginDataType, GradesListType } from '../helpers/types'
import styles from './AddGrade.module.css'

const AddGrade = () => {
	const loginInfoData = useSelector<any, LoginDataType>(state => state.loginData)
	const [studentList, setStudentList] = useState<string[]>()
	const router = useRouter()
	const chosenClass = router.query.class

	useEffect(() => {
		if (loginInfoData.email !== '' && chosenClass) {
			fetch('/api/grades')
				.then(response => response.json())
				.then(data => {
					const filteredData = data.grades.filter((gradesArr: GradesListType) => gradesArr.class === chosenClass)
					const students = findAllNames(filteredData[0].content['Semester 1'])
					setStudentList(students)
				})
		}
	}, [loginInfoData, chosenClass])

	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Add new grade</h2>
			{studentList && typeof chosenClass === 'string' ? (
				<AddGradeForm studentList={studentList} subject={loginInfoData.belong} chosenClass={chosenClass} />
			) : (
				<LoadingSpinner loading={studentList === undefined} />
			)}
		</div>
	)
}

export default AddGrade
