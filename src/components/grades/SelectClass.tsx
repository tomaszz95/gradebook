import styles from './SelectClass.module.css'
import { useRef } from 'react'

const SelectClass: React.FC<{ onSelectClass: (selectedClass: string) => void }> = ({ onSelectClass }) => {
	const selectedRef = useRef<HTMLSelectElement>(null)

	const chooseClassValue = () => {
		if (selectedRef === null || selectedRef.current === null) return
		onSelectClass(selectedRef.current.value)
	}

	return (
		<div className={styles.selectBox}>
			<label htmlFor='selectClass' className={styles.selectTitle}>
				Choose class:
			</label>
			<select id='selectClass' className={styles.selectComp} ref={selectedRef} onChange={chooseClassValue}>
				<option value='1A'>1A</option>
				<option value='1B'>1B</option>
				<option value='1C'>1C</option>
				<option value='2A'>2A</option>
				<option value='2B'>2B</option>
				<option value='2C'>2C</option>
				<option value='3A'>3A</option>
				<option value='3B'>3B</option>
				<option value='3C'>3C</option>
			</select>
		</div>
	)
}

export default SelectClass
