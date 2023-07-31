import { useState } from 'react'

import { SingleGradesType } from '../helpers/types'
import { addBackgroundColor } from '../helpers/gradesHelpersFunctions'
import styles from './SingleGrade.module.css'

type ComponentType = {
	gradeData: SingleGradesType
}

const SingleGrade: React.FC<ComponentType> = ({ gradeData }) => {
	const [isMouseOnGrade, setIsMouseOnGrade] = useState(false)
	const gradeColor = addBackgroundColor(gradeData.grade)

	const showGradeModal = () => {
		setIsMouseOnGrade(true)
	}

	const hideGradeModal = () => {
		setIsMouseOnGrade(false)
	}

	return (
		<>
			<span className={gradeColor} onMouseEnter={showGradeModal} onMouseLeave={hideGradeModal}>
				{gradeData.grade}
				{isMouseOnGrade && (
					<div className={styles.modal}>
						<span>
							Grade: <b>{gradeData.grade}</b>
						</span>
						<span>
							Date: <b>{gradeData.date}</b>
						</span>
						<span>
							Topic: <b>{gradeData.topic}</b>
						</span>
						<span>
							Category: <b>{gradeData.category}</b>
						</span>
						<span>
							Weight: <b>{gradeData.weight}</b>
						</span>
					</div>
				)}
			</span>
		</>
	)
}

export default SingleGrade
