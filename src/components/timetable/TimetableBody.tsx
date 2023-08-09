import TimetableRow from '@src/components/timetable/TimetableRow'

import { TimetableDataType } from '@src/components/helpers/types'
import styles from './TimetableBody.module.css'

type ComponentType = { lessonsTimetable: TimetableDataType }

const TimetableBody: React.FC<ComponentType> = ({ lessonsTimetable }) => {
    return (
        <tbody className={styles.body}>
            <TimetableRow lessonsData={lessonsTimetable.lessons[1]} number="1" hours="8.00-8.45" />
            <TimetableRow lessonsData={lessonsTimetable.lessons[2]} number="2" hours="8.50-9.35" />
            <TimetableRow lessonsData={lessonsTimetable.lessons[3]} number="3" hours="9.45-10.30" />
            <TimetableRow lessonsData={lessonsTimetable.lessons[4]} number="4" hours="10.40-11.25" />
            <TimetableRow lessonsData={lessonsTimetable.lessons[5]} number="5" hours="11.40-12.25" />
            <TimetableRow lessonsData={lessonsTimetable.lessons[6]} number="6" hours="12.30-13.15" />
            <TimetableRow lessonsData={lessonsTimetable.lessons[7]} number="7" hours="13.25-14.10" />
        </tbody>
    )
}

export default TimetableBody
