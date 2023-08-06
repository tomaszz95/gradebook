import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import AddNewsForm from './AddNewsForm'
import Modal from '../UI/Modal'

import { NewNewsFormData, LoginDataType } from '../helpers/types'
import styles from './AddNews.module.css'

const AddNews = () => {
	const router = useRouter()
	const loginInfoData = useSelector<any, LoginDataType>(state => state.loginData)
	const [showModal, setShowModal] = useState(false)
	const [modalResult, setModalResult] = useState('')
	let isError = false

	const sendDataHandler = async (formData: NewNewsFormData) => {
		const nowDate = new Date()
		const day = nowDate.getDate().toString().padStart(2, '0')
		const month = (nowDate.getMonth() + 1).toString().padStart(2, '0')
		const year = nowDate.getFullYear()
		const newsDate = `${day}-${month}-${year}`

		const fullNewsData = {
			title: formData.title,
			description: formData.description,
			text: formData.text,
			img: formData.img,
			delete: true,
			date: newsDate,
			author: loginInfoData.name,
		}

		let response

		try {
			response = await fetch('/api/news', {
				method: 'POST',
				body: JSON.stringify(fullNewsData),
				headers: {
					'Content-Type': 'application/json',
				},
			})

			if (response.ok) {
				setShowModal(true)
				setModalResult('Your news has been successfully submitted!')
				isError = false
			} else if (response.status === 404) {
				setShowModal(true)
				setModalResult('Something went wrong.')
				isError = true
			} else if (response.status === 500) {
				setShowModal(true)
				setModalResult('Our servers have some problems. Please try again later.')
				isError = true
			} else {
				setShowModal(true)
				setModalResult(response.statusText)
				isError = true
			}
		} catch (error) {
			setShowModal(true)
			setModalResult('Something went wrong!')
		}

		return isError
	}

	const closeModalHandler = () => {
		if (modalResult === 'Your news has been successfully submitted!') {
			router.push(`/${loginInfoData.role}/news`)
			setShowModal(false)
			setModalResult('')
		}
		setShowModal(false)
		setModalResult('')
	}

	return (
		<div className={styles.container}>
			<AddNewsForm onSendData={sendDataHandler} />
			{showModal && <Modal result={modalResult} onCloseModal={closeModalHandler} />}
		</div>
	)
}

export default AddNews
