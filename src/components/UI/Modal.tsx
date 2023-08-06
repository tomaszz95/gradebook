import styles from './Modal.module.css'

type ComponentType = { result: string; onCloseModal: () => void }

const Modal: React.FC<ComponentType> = ({ result, onCloseModal }) => {
	return (
		<div className={styles.modal} onClick={onCloseModal}>
			<div className={styles.box}>
				<p>{result}</p>
				<button onClick={onCloseModal} aria-label='Click to confirm'>
					Confirm
				</button>
			</div>
		</div>
	)
}

export default Modal
