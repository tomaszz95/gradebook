import styles from './SingleGrade.module.css'
import { useState } from 'react'

export const addBackgroundColor = (grade: string) => {
	let colorClass

	if (+grade < 1.99) {
		colorClass = styles.bad
	} else if (+grade < 2.99) {
		colorClass = styles.better
	} else if (+grade < 3.99) {
		colorClass = styles.medium
	} else if (grade === '-') {
		colorClass = styles.bad
	} else {
		colorClass = styles.hight
	}
	return colorClass
}

const SingleGrade: React.FC<any> = ({ gradeData }) => {
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
