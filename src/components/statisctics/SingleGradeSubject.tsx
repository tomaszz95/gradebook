import { StatisticsSubjectsType } from '../helpers/types'
import { addBackgroundColor } from '../helpers/gradesHelpersFunctions'
import styles from './SingleGradeSubject.module.css'

type ComponentType = {
	averageArrayData: StatisticsSubjectsType[]
}

const SingleGradeSubject: React.FC<ComponentType> = ({ averageArrayData }) => {
	if (averageArrayData === undefined) return <div>Loading...</div>

	return (
		<>
			{averageArrayData.map((item: StatisticsSubjectsType) => (
				<div className={styles.box} key={Math.random()}>
					<p className={styles.subject}>{item.subject}</p>
					<span className={addBackgroundColor(item.average)}>{item.average}</span>
				</div>
			))}
		</>
	)
}

export default SingleGradeSubject
