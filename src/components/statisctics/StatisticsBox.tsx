import SingleStats from './SingleStats'

import { StatisticsSubjectsType } from '../helpers/types'
import styles from './StatisticsBox.module.css'

type ComponentType = {
	personInfo: StatisticsSubjectsType[]
	role: string
	belong: string | undefined
	studentName: string | undefined
	classBox: boolean
}

const StatisticsBox: React.FC<ComponentType> = ({ personInfo, role, belong, studentName, classBox }) => {
	const headingTitle = role === 'teacher' ? belong : classBox ? belong : studentName
	return (
		<div className={styles.box}>
			<h3 className={styles.heading}>
				Average grades for <span>{headingTitle}</span>
			</h3>
			<div className={styles.line}></div>
			<SingleStats
				averageData={personInfo}
				componentFor={`Averages of best ${role === 'student' ? 'subjects' : 'classes'}`}
				role={role}
			/>
			<SingleStats
				averageData={personInfo}
				componentFor={`Averages of worst ${role === 'student' ? 'subjects' : 'classes'}`}
				role={role}
			/>
		</div>
	)
}

export default StatisticsBox
