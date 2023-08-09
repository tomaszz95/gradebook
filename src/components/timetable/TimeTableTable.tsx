import TimetableHead from '@components/timetable/TimetableHead'
import TimetableBody from '@components/timetable/TimetableBody'

import { TimetableDataType } from '@components/helpers/types'
import styles from '@components/timetable/TimetableTable.module.css'

type ComponentType = { lessonsTimetable: TimetableDataType }

const TimetableTable: React.FC<ComponentType> = ({ lessonsTimetable }) => {
    return (
        <table className={styles.table}>
            <TimetableHead />
            <TimetableBody lessonsTimetable={lessonsTimetable} />
        </table>
    )
}

export default TimetableTable
