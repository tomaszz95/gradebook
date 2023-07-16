import styles from './Modal.module.css'

const Modal: React.FC<{ result: string; onCloseModal: () => void }> = ({ result, onCloseModal }) => {
	return (
		<div className={styles.modal}>
			<div className={styles.box}>
				<p>{result}</p>
				<button onClick={onCloseModal}>Confirm</button>
			</div>
		</div>
	)
}

export default Modal
