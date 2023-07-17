import styles from './AddGrade.module.css'
import AddGradeForm from './AddGradeForm'

const AddGrade = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Add new grade</h2>
			<AddGradeForm />
			{/* {showModal && <Modal result={modalResult} onCloseModal={closeModalHandler} />} */}
		</div>
	)
}

export default AddGrade
