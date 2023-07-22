import { CSSProperties } from 'react'
import FadeLoader from 'react-spinners/FadeLoader'
import styles from './LoadingSpinner.module.css'

const override: CSSProperties = {
	display: 'block',
	margin: '30 auto',
}

const LoadingSpinner: React.FC<{ loading: boolean }> = ({ loading }) => {
	return (
		<div className={styles.loader}>
			<FadeLoader
				color='#05c715'
				cssOverride={override}
				loading={loading}
				aria-label='Loading Spinner'
				data-testid='loader'
			/>
		</div>
	)
}

export default LoadingSpinner
