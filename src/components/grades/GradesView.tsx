import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import LoadingSpinner from '../UI/LoadingSpinner'
import GradesTable from './GradesTable'
import SelectClass from './SelectClass'

import { LoginDataType, GradesListType, GradesListContentType } from '../helpers/types'
import styles from './GradesView.module.css'

const GradesView = () => {
	const loginInfoData = useSelector<any, LoginDataType>(state => state.loginData)
	const [selectedValue, setSelectedValue] = useState('1A')
	const [gradesList, setGradesList] = useState<GradesListContentType | undefined>()
	const router = useRouter()

	useEffect(() => {
		if (loginInfoData.email !== '') {
			fetch('/api/grades')
				.then(response => response.json())
				.then(data => {
					let filteredData

					if (selectedValue !== '' && selectedValue === loginInfoData.belong) {
						filteredData = data.grades.filter((gradesArr: GradesListType) => gradesArr.class === selectedValue)
					} else if (selectedValue === '' && loginInfoData.role === 'teacher') {
						filteredData = data.grades.filter((gradesArr: GradesListType) => gradesArr.class === '1A')
					} else {
						filteredData = data.grades.filter((gradesArr: GradesListType) => gradesArr.class === loginInfoData.belong)
					}

					if (filteredData) {
						setGradesList(filteredData[0].content)
					}
				})
		}
	}, [loginInfoData, selectedValue])
	
	const selectClassHandler = (selectedClass: string) => {
		setGradesList(undefined)
		setSelectedValue(selectedClass)
	}

	return (
		<div className={styles.container}>
			<h2 className={styles.header}>
				{loginInfoData.role.includes('student') ? 'Check your grades!' : 'Check / add grades!'}
			</h2>
			{loginInfoData && (
				<span className={styles.name}>
					{loginInfoData.name} - {loginInfoData.belong}
				</span>
			)}
			{loginInfoData.role.includes('student') ? '' : <SelectClass onSelectClass={selectClassHandler} />}
			{loginInfoData.role.includes('student') ? (
				''
			) : (
				<button onClick={() => router.push(`/teacher/grades/add-grade/${selectedValue}`)} className={styles.newButton}>
					Add grade
				</button>
			)}
			{gradesList ? <GradesTable gradesList={gradesList} /> : <LoadingSpinner loading={gradesList === undefined} />}
		</div>
	)
}

export default GradesView
