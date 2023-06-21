import { ChildrenLayoutType } from '../helpers/types'
import styles from './WindowView.module.css'

const WindowView: React.FC<ChildrenLayoutType> = ({ children }) => {
	return <main className={styles.main}>{children}</main>
}

export default WindowView
