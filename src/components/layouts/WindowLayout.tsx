import { ChildrenLayoutType } from '../helpers/types'
import styles from './WindowLayout.module.css'

const WindowLayout: React.FC<ChildrenLayoutType> = ({ children }) => {
	return <main className={styles.main}>{children}</main>
}

export default WindowLayout
