import TimetableHead from 'src/components/timetable/TimetableHead'
import TimetableBody from 'src/components/timetable/TimetableBody'

import { TimetableDataType } from 'src/components/helpers/types'
import styles from './TimetableTable.module.css'

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
