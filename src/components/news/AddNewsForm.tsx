import { useRef, useState } from 'react'
import axios from 'axios'

import { NewNewsFormData } from '../helpers/types'
import styles from './AddNewsForm.module.css'

type ComponentType = { onSendData: (formData: NewNewsFormData) => Promise<boolean> }

const AddNewsForm: React.FC<ComponentType> = ({ onSendData }) => {
	const titleRef = useRef<HTMLInputElement>(null)
	const descriptionRef = useRef<HTMLInputElement>(null)
	const textRef = useRef<HTMLTextAreaElement>(null)
	const imageRef = useRef<HTMLInputElement>(null)

	const [titleError, setTitleError] = useState('')
	const [descriptionError, setDescriptionError] = useState('')
	const [textError, setTextError] = useState('')
	const [imageError, setImageError] = useState('')

	const newsFormHandler = async (e: React.SyntheticEvent) => {
		e.preventDefault()
		let title = ''
		let description = ''
		let text = ''
		let img = ''

		// TITLE ERROR
		if (
			titleRef.current !== null &&
			titleRef.current.value.trim() !== '' &&
			titleRef.current.value.trim().length <= 70
		) {
			setTitleError('')
			title = titleRef.current.value.trim()
		} else if (titleRef.current !== null && titleRef.current.value.trim() === '') {
			setTitleError('Title cannot be empty!')
		} else if (titleRef.current !== null && titleRef.current.value.trim().length > 70) {
			setTitleError('Title must be shorter than 70 letters!')
		}

		// DESCRIPTION ERROR
		if (
			descriptionRef.current !== null &&
			descriptionRef.current.value.trim() !== '' &&
			descriptionRef.current.value.trim().length <= 400
		) {
			setDescriptionError('')
			description = descriptionRef.current.value.trim()
		} else if (descriptionRef.current !== null && descriptionRef.current.value.trim() === '') {
			setDescriptionError('Description cannot be empty!')
		} else if (descriptionRef.current !== null && descriptionRef.current.value.trim().length > 400) {
			setDescriptionError('Description must be shorter than 400 letters!')
		}

		// TEXT ERROR
		if (
			textRef.current !== null &&
			textRef.current.value.trim() !== '' &&
			textRef.current.value.trim().length <= 1500
		) {
			setTextError('')
			text = textRef.current.value.trim()
		} else if (textRef.current !== null && textRef.current.value.trim() === '') {
			setTextError('Text cannot be empty!')
		} else if (textRef.current !== null && textRef.current.value.trim().length > 1500) {
			setTextError('Text must be shorter than 1500 letters!')
		}

		// IMAGE ERROR
		if (
			imageRef.current !== null &&
			imageRef.current.value.trim() !== '' &&
			!imageRef.current.value.includes('jpg') &&
			!imageRef.current.value.includes('jpeg') &&
			!imageRef.current.value.includes('png')
		) {
			setImageError('You must set a proper image link!')
		} else if (imageRef.current !== null && imageRef.current.value.trim() === '') {
			setImageError('Image input cannot be empty!')
		} else if (imageRef.current !== null && imageRef.current.value.trim() !== '') {
			const imageURL = imageRef.current.value
			try {
				const response = await axios.post('/api/validateImage', { imageURL })
				if (response.data.isValid) {
					setImageError('')
					img = imageRef.current.value.trim()
				} else {
					setImageError('You must set a proper image link!')
				}
			} catch (error) {
				setImageError('Image cannot be loaded - check your link!')
			}
		}

		if (title !== '' && description !== '' && text !== '' && img !== '') {
			const newNews = {
				title,
				description,
				text,
				img,
			}

			const isError = await onSendData(newNews)

			if (!isError) {
				titleRef.current!.value = ''
				descriptionRef.current!.value = ''
				textRef.current!.value = ''
				imageRef.current!.value = ''
			} else {
			}
		}
	}

	return (
		<>
			<h2 className={styles.header}>Add new news</h2>
			<form className={styles.form} encType='multipart/form-data' onSubmit={newsFormHandler}>
				<div className={styles.box}>
					<label className={styles.label} htmlFor='title'>
						News title<p className={styles.info}>(max. length 70 letters)</p>
					</label>
					<input
						placeholder='Enter title...'
						className={styles.input}
						type='text'
						id='title'
						ref={titleRef}
						maxLength={70}
						required
					/>
					<p className={styles.error}>{titleError}</p>
				</div>
				<div className={styles.box}>
					<label className={styles.label} htmlFor='description'>
						News description<p className={styles.info}>(max. length 400 letters)</p>
					</label>
					<input
						placeholder='Enter description...'
						className={styles.input}
						type='text'
						id='description'
						ref={descriptionRef}
						maxLength={400}
						required
					/>
					<p className={styles.error}>{descriptionError}</p>
				</div>
				<div className={styles.box}>
					<label className={styles.label} htmlFor='newsText'>
						News text<p className={styles.info}>(max. length 1500 letters)</p>
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
					<label className={styles.label} htmlFor='newsImage'>
						Choose image to upload
						<p className={styles.info}>(paste link to image - only png, jpg and jpeg extensions)</p>
					</label>
					<input
						placeholder='Enter image url...'
						className={styles.input}
						type='text'
						id='newsImage'
						ref={imageRef}
						required
					/>
					<p className={styles.error}>{imageError}</p>
				</div>
				<button type='submit' aria-label='Click to add new news' className={styles.button}>
					Click to add new news
				</button>
			</form>
		</>
	)
}

export default AddNewsForm
