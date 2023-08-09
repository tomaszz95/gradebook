import SingleGrade from './SingleGrade'

import { GradesSubjectInsideType, SingleGradesType } from '../helpers/types'
import { countEndGrade, countAverage, addBackgroundColor } from '../helpers/gradesHelpersFunctions'
import styles from './GradesRow.module.css'

type ComponentType = {
    subject: string
    subjectData: GradesSubjectInsideType
}

// @ts-ignore
const GradesRow: React.FC<ComponentType> = ({ subject, subjectData }) => {
    if (subjectData === undefined) return

    const averageGrade = countAverage(subjectData.Grades)
    const endMark = countEndGrade(averageGrade)
    const averageGradeColor = addBackgroundColor(averageGrade)
    const endMarkColor = addBackgroundColor(endMark)

    return (
        <tr className={styles.row}>
            <td className={styles.subject}>{subject}</td>
            <td>
                {subjectData.Pluses.map((data: SingleGradesType) => (
                    <SingleGrade gradeData={data} key={Math.random()} />
                ))}
            </td>
            <td>
                {subjectData.Grades.map((data: SingleGradesType) => (
                    <SingleGrade gradeData={data} key={Math.random()} />
                ))}
            </td>
            <td>
                <span className={averageGradeColor}>{averageGrade}</span>
            </td>
            <td>
                <span className={endMarkColor}>{endMark}</span>
            </td>
        </tr>
    )
}

export default GradesRow
