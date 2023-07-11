import styles from './SingleStats.module.css'

const SingleStats = () => {
	return (
		<div className={styles.singleStats}>
			<p className={styles.title}>Best grade subjects:</p>
			<div className={styles.container}>
				<div className={styles.box}>
					<span className={styles.subject}></span>
					<span className={styles.grade}></span>
				</div>
				<div className={styles.box}>
					<span className={styles.subject}></span>
					<span className={styles.grade}></span>
				</div>
				<div className={styles.box}>
					<span className={styles.subject}></span>
					<span className={styles.grade}></span>
				</div>
			</div>
		</div>
	)
}

export default SingleStats
