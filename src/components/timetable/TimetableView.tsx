import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import TimetableTable from './TimeTableTable'
import LoadingSpinner from '../UI/LoadingSpinner'

import { LoginDataType, TimetableDataType } from '../helpers/types'
import styles from './TimetableView.module.css'

const TimeTable = () => {
	const loginInfoData = useSelector<any, LoginDataType>(state => state.loginData)
	const [timetable, setTimetable] = useState<TimetableDataType>()

	useEffect(() => {
		if (loginInfoData.email !== '') {
			fetch('/api/timetable')
				.then(response => response.json())
				.then(data => {
					const filteredData = data.timetable.filter((item: TimetableDataType) => item.name === loginInfoData.name)

					setTimetable(filteredData[0])
				})
		}
	}, [loginInfoData])

	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Check your lessons!</h2>
			{timetable && (
				<span className={styles.name}>
					{timetable.name} - {timetable.belong}
				</span>
			)}
			{timetable ? (
				<TimetableTable lessonsTimetable={timetable} />
			) : (
				<LoadingSpinner loading={timetable === undefined} />
			)}
		</div>
	)
}

export default TimeTable
