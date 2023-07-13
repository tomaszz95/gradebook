import { useRef } from 'react'
import styles from './AddNews.module.css'

const AddNews = () => {
	const titleRef = useRef<HTMLInputElement>(null)
	const descriptionRef = useRef<HTMLInputElement>(null)
	const textRef = useRef<HTMLTextAreaElement>(null)
	const imageRef = useRef<HTMLInputElement>(null)

	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Add new news</h2>
			<form className={styles.form} encType='multipart/form-data'>
				<div className={styles.box}>
					<label className={styles.label} htmlFor='title'>
						News title
					</label>
					<input placeholder='Enter title...' className={styles.input} type='text' id='title' ref={titleRef} />
					<p className={styles.error}>Some error</p>
				</div>
				<div className={styles.box}>
					<label className={styles.label} htmlFor='description'>
						News description
					</label>
					<input
						placeholder='Enter description...'
						className={styles.input}
						type='text'
						id='description'
						ref={descriptionRef}
					/>
					<p className={styles.error}>Some error</p>
				</div>
				<div className={styles.box}>
					<label className={styles.label} htmlFor='newsText'>
						News text
					</label>
					<textarea placeholder='Enter text...' className={styles.textarea} id='newsText' ref={textRef} />
					<p className={styles.error}>Some error</p>
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
							ref={imageRef}
						/>
					</label>
					<p className={styles.error}>Some error</p>
				</div>
				<button type='submit' aria-label='Click to add new news' className={styles.button}>
					Click to add new news
				</button>
			</form>
		</div>
	)
}

export default AddNews
