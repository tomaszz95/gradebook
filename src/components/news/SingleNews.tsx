import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'

import { SingleNewsDataRoleType } from '../helpers/types'
import Modal from '../UI/Modal'
import styles from './SingleNews.module.css'

const SingleNews: React.FC<SingleNewsDataRoleType> = ({ newsData, role }) => {
	const router = useRouter()
	const slug = newsData.title.toLowerCase().replaceAll(' ', '-')
	const [showModal, setShowModal] = useState(false)
	const [modalResult, setModalResult] = useState('')

	const deleteNewsHandler = async () => {
		try {
			const response = await fetch(`/api/news?id=${newsData._id}`, {
				method: 'DELETE',
			})

			if (response.ok) {
				setShowModal(true)
				setModalResult('Sucessfully deleted news!')
			} else {
				setShowModal(true)
				setModalResult('Delete news failed..')
			}
		} catch (error) {
			setShowModal(true)
			setModalResult('Delete news failed..')
		}
	}

	const closeModalHandler = () => {
		if (modalResult === 'Sucessfully deleted news!') {
			router.reload()
			setShowModal(false)
			setModalResult('')
		}
		setShowModal(false)
		setModalResult('')
	}

	return (
		<li className={styles.item}>
			<Link href={`/${role}/news/${slug}`}>
				<img src={newsData.img} alt={newsData.title} className={styles.img} />
				<div className={styles.content}>
					<h3 className={styles.title}>{newsData.title}</h3>
					<p className={styles.text}>{newsData.description}</p>
					<div className={styles.box}>
						<span className={styles.info}>{newsData.date}</span>
						<span className={styles.info}>{newsData.author}</span>
					</div>
				</div>
			</Link>
			{newsData.delete === true && role === 'teacher' && (
				<button onClick={deleteNewsHandler} className={styles.deleteBtn}>
					X
				</button>
			)}
			{showModal && <Modal result={modalResult} onCloseModal={closeModalHandler} />}
		</li>
	)
}

export default SingleNews
