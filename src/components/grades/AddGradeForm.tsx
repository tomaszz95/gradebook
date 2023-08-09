import { useRef, useState } from 'react'

import Modal from '../UI/Modal'

import { countWeight } from '../helpers/gradesHelpersFunctions'
import styles from './AddGradeForm.module.css'

type ComponentType = {
    studentList: string[]
    subject: string
    chosenClass: string
}

const AddGradeForm: React.FC<ComponentType> = ({ studentList, subject, chosenClass }) => {
    const studentNameRef = useRef<HTMLSelectElement>(null)
    const gradeRef = useRef<HTMLSelectElement>(null)
    const dateRef = useRef<HTMLInputElement>(null)
    const topicRef = useRef<HTMLInputElement>(null)
    const categoryRef = useRef<HTMLSelectElement>(null)

    const [studentNameError, setStudentNameError] = useState('')
    const [gradeError, setGradeError] = useState('')
    const [dateError, setDateError] = useState('')
    const [topicError, setTopicError] = useState('')
    const [categoryError, setCategoryError] = useState('')
    const [showModal, setShowModal] = useState(false)
    const [modalResult, setModalResult] = useState('')

    const addGradeHandler = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        let studentName = ''
        let grade = ''
        let date = ''
        let topic = ''
        let category = ''
        const weight = countWeight(grade)

        // STUDENTNAME ERROR
        if (studentNameRef.current !== null && studentNameRef.current.value !== '0') {
            setStudentNameError('')
            studentName = studentNameRef.current.value
        } else {
            setStudentNameError('You must select a student!')
        }

        // GRADE ERROR
        if (gradeRef.current !== null && gradeRef.current.value !== '0') {
            setGradeError('')
            grade = gradeRef.current.value
        } else {
            setGradeError('You must select a grade!')
        }

        // DATE ERROR
        if (dateRef.current !== null && dateRef.current.value !== '') {
            setDateError('')
            date = dateRef.current.value
        } else {
            setDateError('You must choose a date!')
        }

        // TOPIC ERROR
        if (topicRef.current !== null && topicRef.current.value.trim() === '') {
            setTopicError('Topic cannot be empty!')
        } else if (topicRef.current !== null && topicRef.current.value.trim().length > 50) {
            setTopicError('Topic must be max. 50 letters long!')
        } else if (topicRef.current !== null) {
            setTopicError('')
            topic = topicRef.current.value
        }

        // CATEGORY ERROR
        if (categoryRef.current !== null && categoryRef.current.value !== '0') {
            setCategoryError('')
            category = categoryRef.current.value
        } else {
            setCategoryError('You must select a category!')
        }

        const fullGradeData = {
            studentName,
            grade,
            date,
            topic,
            category,
            weight,
            subject,
            chosenClass,
        }

        let response

        if (studentName !== '' && grade !== '' && date !== '' && topic !== '' && category !== '') {
            try {
                response = await fetch('/api/grades', {
                    method: 'POST',
                    body: JSON.stringify(fullGradeData),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                if (response.ok) {
                    setShowModal(true)
                    setModalResult('Your grade has been successfully submitted!')
                } else if (response.status === 404) {
                    setShowModal(true)
                    setModalResult('Something went wrong.')
                } else if (response.status === 500) {
                    setShowModal(true)
                    setModalResult('Our servers have some problems. Please try again later.')
                } else {
                    setShowModal(true)
                    setModalResult(response.statusText)
                }
            } catch (error) {
                setShowModal(true)
                setModalResult('Something went wrong!')
            }

            studentNameRef.current!.value = '0'
            gradeRef.current!.value = '0'
            dateRef.current!.value = ''
            topicRef.current!.value = ''
            categoryRef.current!.value = '0'
        }
    }

    const closeModalHandler = () => {
        setShowModal(false)
        setModalResult('')
    }

    return (
        <>
            <form className={styles.form} onSubmit={addGradeHandler}>
                <div className={styles.box}>
                    <label className={styles.label} htmlFor="student">
                        Select student
                    </label>
                    <select
                        className={`${styles.select} ${styles.student}`}
                        id="student"
                        ref={studentNameRef}
                        defaultValue="0"
                    >
                        <option value="0" disabled>
                            -- choose student --
                        </option>
                        {studentList.map((student) => (
                            <option value={student} key={Math.random()}>
                                {student}
                            </option>
                        ))}
                    </select>
                    <p className={styles.error}>{studentNameError}</p>
                </div>
                <div className={styles.box}>
                    <label className={styles.label} htmlFor="grade">
                        Select grade
                    </label>
                    <select className={styles.select} id="grade" ref={gradeRef} defaultValue="0">
                        <option value="0" disabled>
                            -- select grade --
                        </option>
                        <option value="1">1</option>
                        <option value="1+">1+</option>
                        <option value="2-">2-</option>
                        <option value="2">2</option>
                        <option value="2+">2+</option>
                        <option value="3-">3-</option>
                        <option value="3">3</option>
                        <option value="3+">3+</option>
                        <option value="4-">4-</option>
                        <option value="4">4</option>
                        <option value="4+">4+</option>
                        <option value="5-">5-</option>
                        <option value="5">5</option>
                        <option value="5+">6+</option>
                        <option value="6-">6-</option>
                        <option value="6">6</option>
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>
                    <p className={styles.error}>{gradeError}</p>
                </div>
                <div className={styles.box}>
                    <label className={styles.label} htmlFor="date">
                        Choose date
                    </label>
                    <input
                        id="date"
                        type="date"
                        className={styles.input}
                        min="2022-09-01"
                        max="2023-09-01"
                        ref={dateRef}
                    />
                    <p className={styles.error}>{dateError}</p>
                </div>
                <div className={styles.box}>
                    <label className={styles.label} htmlFor="topic">
                        Enter topic
                    </label>
                    <input
                        id="topic"
                        type="text"
                        className={styles.input}
                        placeholder="Enter grade topic.."
                        maxLength={50}
                        ref={topicRef}
                    />
                    <p className={styles.error}>{topicError}</p>
                </div>
                <div className={styles.box}>
                    <label className={styles.label} htmlFor="category">
                        Select category
                    </label>
                    <select
                        className={`${styles.select} ${styles.category}`}
                        id="category"
                        ref={categoryRef}
                        defaultValue="0"
                    >
                        <option value="0" disabled>
                            -- select category --
                        </option>
                        <option value="Activity">Activity</option>
                        <option value="Homework">Homework</option>
                        <option value="Card">Card</option>
                        <option value="Verbal">Verbal</option>
                        <option value="Test">Test</option>
                    </select>
                    <p className={styles.error}>{categoryError}</p>
                </div>
                <button type="submit" aria-label="Click to add new grade" className={styles.button}>
                    Click to add grade
                </button>
            </form>
            {showModal && <Modal result={modalResult} onCloseModal={closeModalHandler} />}
        </>
    )
}

export default AddGradeForm
