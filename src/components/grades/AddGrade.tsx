import styles from './AddGrade.module.css'
import AddGradeForm from './AddGradeForm'

const AddGrade = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Add new grade</h2>
			<AddGradeForm />
		</div>
	)
}

export default AddGrade
