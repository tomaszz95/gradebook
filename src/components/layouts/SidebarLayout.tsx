import { ChildrenLayoutType } from '../helpers/types'
import Sidebar from '../sidebar/Sidebar'

import styles from './SidebarLayout.module.css'

const SidebarLayout: React.FC<ChildrenLayoutType> = ({ children }) => {
	return (
		<main className={styles.main}>
			<Sidebar />
			<section className={styles.content}>
				<div className={styles.card}>{children}</div>
			</section>
		</main>
	)
}

export default SidebarLayout
