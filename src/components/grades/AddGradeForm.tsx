import styles from './AddGradeForm.module.css'
import { useRef, useState } from 'react'
import Modal from '../UI/Modal'

const dummyTeacherData = {
	'Semester 1': {
		'Jan Kowalski': {
			Pluses: [
				{
					grade: '-',
					date: '21-04-2023',
					topic: 'Lorem ipsum asd sa das asd asdsad sadsa das dsad ',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '-',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '3',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Jan Matejko': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '2',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Alina Janik': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '1',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Michał Milowicz': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '3',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Robert Lewandowski': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '4-',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Adam Małysz': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '1+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Sebastian Sztabka': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '4',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Joanna Wózek': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3-',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Elwira Lwira': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Aneta Gazeta': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '1',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Piotr Patelka': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '2',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Michalina Agrest': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '3',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '1',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
	},
	'Semester 2': {
		'Jan Kowalski': {
			Pluses: [
				{
					grade: '-',
					date: '21-04-2023',
					topic: 'Lorem ipsum asd sa das asd asdsad sadsa das dsad ',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '-',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '3',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Jan Matejko': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '2',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Alina Janik': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '1',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Michał Milowicz': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '3',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Robert Lewandowski': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '4-',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Adam Małysz': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '1+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Sebastian Sztabka': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '4',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Joanna Wózek': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '2+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3-',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Elwira Lwira': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '5',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Aneta Gazeta': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '1',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
				{
					grade: '2',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Piotr Patelka': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '2',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '3',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
		'Michalina Agrest': {
			Pluses: [
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
				{
					grade: '+',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Activity',
					weight: 1,
				},
			],
			Grades: [
				{
					grade: '3',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '4+',
					date: '14-03-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '1',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
				{
					grade: '4',
					date: '21-04-2023',
					topic: 'Lorem ipsum',
					category: 'Card',
					weight: 1,
				},
			],
		},
	},
}

const findAllObjects = (subjectsObj: any) => {
	let subjectsArr = []
	for (const subject in subjectsObj) {
		subjectsArr.push(subject)
	}
	return subjectsArr
}

const AddGradeForm = () => {
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

	const subjectsOrPersonsArray = findAllObjects(dummyTeacherData['Semester 2'])

	const addGradeHandler = (e: React.SyntheticEvent) => {
		e.preventDefault()
		let studentName = ''
		let grade = ''
		let date = ''
		let topic = ''
		let category = ''

		// STUDENTNAME ERROR
		if (studentNameRef.current !== null && studentNameRef.current.value !== '0') {
			setStudentNameError('')
			studentName = studentNameRef.current.value
		} else {
			setStudentNameError('You must choose the student!')
		}

		// GRADE ERROR
		if (gradeRef.current !== null && gradeRef.current.value !== '0') {
			setGradeError('')
			grade = gradeRef.current.value
		} else {
			setGradeError('You must choose the grade!')
		}

		// DATE ERROR
		if (dateRef.current !== null && dateRef.current.value !== '') {
			setDateError('')
			date = dateRef.current.value
		} else {
			setDateError('You must choose the date!')
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
			setCategoryError('You must choose the category!')
		}

		if (studentName !== '' && grade !== '' && date !== '' && topic !== '' && category !== '') {
			console.log({ studentName, grade, date, topic, category })
			studentNameRef.current!.value = '0'
			gradeRef.current!.value = '0'
			dateRef.current!.value = ''
			topicRef.current!.value = ''
			categoryRef.current!.value = '0'
			setShowModal(true)
			setModalResult('Your grade has been successfully submitted!')
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
					<label className={styles.label} htmlFor='student'>
						Choose student
					</label>
					<select className={`${styles.select} ${styles.student}`} id='student' ref={studentNameRef} defaultValue='0'>
						<option value='0' disabled>
							-- choose student --
						</option>
						{subjectsOrPersonsArray.map(student => (
							<option value={student} key={Math.random()}>
								{student}
							</option>
						))}
					</select>
					<p className={styles.error}>{studentNameError}</p>
				</div>
				<div className={styles.box}>
					<label className={styles.label} htmlFor='grade'>
						Choose grade
					</label>
					<select className={styles.select} id='grade' ref={gradeRef} defaultValue='0'>
						<option value='0' disabled>
							-- select grade --
						</option>
						<option value='1'>1</option>
						<option value='1+'>1+</option>
						<option value='2-'>2-</option>
						<option value='2'>2</option>
						<option value='2+'>2+</option>
						<option value='3-'>3-</option>
						<option value='3'>3</option>
						<option value='3+'>3+</option>
						<option value='4-'>4-</option>
						<option value='4'>4</option>
						<option value='4+'>4+</option>
						<option value='5-'>5-</option>
						<option value='5'>5</option>
						<option value='5+'>6+</option>
						<option value='6-'>6-</option>
						<option value='6'>6</option>
						<option value='+'>+</option>
						<option value='-'>-</option>
					</select>
					<p className={styles.error}>{gradeError}</p>
				</div>
				<div className={styles.box}>
					<label className={styles.label} htmlFor='date'>
						Choose date
					</label>
					<input id='date' type='date' className={styles.input} min='2022-09-01' max='2023-09-01' ref={dateRef} />
					<p className={styles.error}>{dateError}</p>
				</div>
				<div className={styles.box}>
					<label className={styles.label} htmlFor='topic'>
						Choose topic
					</label>
					<input
						id='topic'
						type='text'
						className={styles.input}
						placeholder='Enter grade topic..'
						maxLength={50}
						ref={topicRef}
					/>
					<p className={styles.error}>{topicError}</p>
				</div>
				<div className={styles.box}>
					<label className={styles.label} htmlFor='category'>
						Choose category
					</label>
					<select className={`${styles.select} ${styles.category}`} id='category' ref={categoryRef} defaultValue='0'>
						<option value='0' disabled>
							-- select category --
						</option>
						<option value='Activity'>Activity</option>
						<option value='Homework'>Homework</option>
						<option value='Card'>Card</option>
						<option value='Verbal'>Verbal</option>
						<option value='Test'>Test</option>
					</select>
					<p className={styles.error}>{categoryError}</p>
				</div>
				<button type='submit' aria-label='Click to add new grade' className={styles.button}>
					Click to add grade
				</button>
			</form>
			{showModal && <Modal result={modalResult} onCloseModal={closeModalHandler} />}
		</>
	)
}

export default AddGradeForm
