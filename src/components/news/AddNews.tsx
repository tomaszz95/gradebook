import { useRef, useState } from 'react'
import Modal from '../UI/Modal'
import styles from './AddNews.module.css'

const AddNews = () => {
	const titleRef = useRef<HTMLInputElement>(null)
	const descriptionRef = useRef<HTMLInputElement>(null)
	const textRef = useRef<HTMLTextAreaElement>(null)

	const [selectedFile, setSelectedFile] = useState<any>()
	const [titleError, setTitleError] = useState('')
	const [descriptionError, setDescriptionError] = useState('')
	const [textError, setTextError] = useState('')
	const [imageError, setImageError] = useState('')
	const [showModal, setShowModal] = useState(false)
	const [modalResult, setModalResult] = useState('')

	const getFileHandler = (e: React.SyntheticEvent) => {
		const target = e.target as HTMLInputElement
		let file
		if (target.files !== null) {
			file = target.files[0]
		}
		setSelectedFile(file)
	}

	const newsFormHandler = (e: React.SyntheticEvent) => {
		e.preventDefault()
		let title = ''
		let description = ''
		let text = ''
		let img = ''

		// TITLE ERROR
		if (
			titleRef.current !== null &&
			titleRef.current.value.trim() !== '' &&
			titleRef.current.value.trim().length <= 50
		) {
			setTitleError('')
			title = titleRef.current.value.trim()
		} else if (titleRef.current !== null && titleRef.current.value.trim() === '') {
			setTitleError('Title cannot be empty!')
		} else if (titleRef.current !== null && titleRef.current.value.trim().length > 50) {
			setTitleError('Title must be shorter than 50 letters!')
		}

		// DESCRIPTION ERROR
		if (
			descriptionRef.current !== null &&
			descriptionRef.current.value.trim() !== '' &&
			descriptionRef.current.value.trim().length <= 155
		) {
			setDescriptionError('')
			description = descriptionRef.current.value.trim()
		} else if (descriptionRef.current !== null && descriptionRef.current.value.trim() === '') {
			setDescriptionError('Description cannot be empty!')
		} else if (descriptionRef.current !== null && descriptionRef.current.value.trim().length > 155) {
			setDescriptionError('Description must be shorter than 155 letters!')
		}

		// TEXT ERROR
		if (textRef.current !== null && textRef.current.value.trim() !== '' && textRef.current.value.trim().length <= 600) {
			setTextError('')
			text = textRef.current.value.trim()
		} else if (textRef.current !== null && textRef.current.value.trim() === '') {
			setTextError('Text cannot be empty!')
		} else if (textRef.current !== null && textRef.current.value.trim().length > 500) {
			setTextError('Text must be shorter than 3000 letters!')
		}

		// IMAGE ERROR
		if (selectedFile !== null && selectedFile !== undefined) {
			setImageError('')
			img = selectedFile
		} else {
			setImageError('Image cannot be empty!')
		}

		if (title !== '' && description !== '' && text !== '' && img !== '') {
			console.log({ title, description, text, img })
			titleRef.current!.value = ''
			descriptionRef.current!.value = ''
			textRef.current!.value = ''
			setSelectedFile(null)
			setShowModal(true)
			setModalResult('Your news has been successfully submitted!')
		}
	}

	const closeModalHandler = () => {
		setShowModal(false)
		setModalResult('')
	}

	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Add new news</h2>
			<form className={styles.form} encType='multipart/form-data' onSubmit={newsFormHandler}>
				<div className={styles.box}>
					<label className={styles.label} htmlFor='title'>
						News title<p className={styles.info}>(max. length 50 letters)</p>
					</label>
					<input
						placeholder='Enter title...'
						className={styles.input}
						type='text'
						id='title'
						ref={titleRef}
						maxLength={50}
						required
					/>
					<p className={styles.error}>{titleError}</p>
				</div>
				<div className={styles.box}>
					<label className={styles.label} htmlFor='description'>
						News description<p className={styles.info}>(max. length 155 letters)</p>
					</label>
					<input
						placeholder='Enter description...'
						className={styles.input}
						type='text'
						id='description'
						ref={descriptionRef}
						maxLength={155}
						required
					/>
					<p className={styles.error}>{descriptionError}</p>
				</div>
				<div className={styles.box}>
					<label className={styles.label} htmlFor='newsText'>
						News text<p className={styles.info}>(max. length 3000 letters)</p>
					</label>
					<textarea
						placeholder='Enter text...'
						className={styles.textarea}
						id='newsText'
						ref={textRef}
						maxLength={3000}
						required
					/>
					<p className={styles.error}>{textError}</p>
				</div>
				<div className={styles.box}>
					<label className={`${styles.label} ${styles.imgLabel}`} htmlFor='newsImage'>
						<img src='/icons/upload.png' />
						Choose image to upload (PNG, JPG, JPEG)
						<input
							className={`${styles.input} ${styles.imageInput}`}
							type='file'
							accept='image/png, image/jpeg, image/jpg'
							id='newsImage'
							onChange={getFileHandler}
							onClick={getFileHandler}
							required
						/>
					</label>
					<p className={styles.error}>{imageError}</p>
				</div>
				<button type='submit' aria-label='Click to add new news' className={styles.button}>
					Click to add new news
				</button>
			</form>
			{showModal && <Modal result={modalResult} onCloseModal={closeModalHandler} />}
		</div>
	)
}

export default AddNews
