import SingleTimetableCell from './SingleTimetableCell'
import React from 'react'
import { TimetableDaysType } from '../helpers/types'
import styles from './TimetableRow.module.css'

type ComponentType = {
    lessonsData: TimetableDaysType
    number: string
    hours: string
}

const TimetableRow: React.FC<ComponentType> = ({ lessonsData, number, hours }) => {
    return (
        <tr className={styles.row}>
            <th>{number}</th>
            <th>{hours}</th>
            <SingleTimetableCell
                subject={lessonsData.Monday.subject ? lessonsData.Monday.subject : lessonsData.Monday.group}
                hall={lessonsData.Monday.class}
            />
            <SingleTimetableCell
                subject={lessonsData.Tuesday.subject ? lessonsData.Tuesday.subject : lessonsData.Tuesday.group}
                hall={lessonsData.Tuesday.class}
            />
            <SingleTimetableCell
                subject={lessonsData.Wednesday.subject ? lessonsData.Wednesday.subject : lessonsData.Wednesday.group}
                hall={lessonsData.Wednesday.class}
            />
            <SingleTimetableCell
                subject={lessonsData.Thursday.subject ? lessonsData.Thursday.subject : lessonsData.Thursday.group}
                hall={lessonsData.Thursday.class}
            />
            <SingleTimetableCell
                subject={lessonsData.Friday.subject ? lessonsData.Friday.subject : lessonsData.Friday.group}
                hall={lessonsData.Friday.class}
            />
        </tr>
    )
}

export default TimetableRow
