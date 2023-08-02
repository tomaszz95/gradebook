import { useRef } from 'react'

import styles from './SelectClass.module.css'

type ComponentType = { onSelectClass: (selectedClass: string) => void }

const SelectClass: React.FC<ComponentType> = ({ onSelectClass }) => {
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
				<option value='1B' disabled>
					1B
				</option>
				<option value='1C' disabled>
					1C
				</option>
				<option value='2A' disabled>
					2A
				</option>
				<option value='2B' disabled>
					2B
				</option>
				<option value='2C' disabled>
					2C
				</option>
				<option value='3A' disabled>
					3A
				</option>
				<option value='3B' disabled>
					3B
				</option>
				<option value='3C'>3C</option>
			</select>
		</div>
	)
}

export default SelectClass
