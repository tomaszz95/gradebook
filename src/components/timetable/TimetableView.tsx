import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import TimetableTable from '@src/components/timetable/TimetableTable'
import LoadingSpinner from '@src/components/UI/LoadingSpinner'

import { LoginDataType, TimetableDataType } from '@src/components/helpers/types'
import styles from './TimetableView.module.css'

const TimetableView = () => {
    const loginInfoData = useSelector<any, LoginDataType>((state) => state.loginData)
    const [timetable, setTimetable] = useState<TimetableDataType>()

    useEffect(() => {
        if (loginInfoData.email !== '') {
            fetch('/api/timetable')
                .then((response) => response.json())
                .then((data) => {
                    const filteredData = data.timetable.filter(
                        (item: TimetableDataType) => item.name === loginInfoData.name,
                    )

                    setTimetable(filteredData[0])
                })
        }
    }, [loginInfoData])

    return (
        <div className={styles.container}>
            <h2 className={styles.header}>Check your lessons!</h2>
            {timetable && (
                <span className={styles.name}>
                    {loginInfoData.name} - {loginInfoData.belong}
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

export default TimetableView
