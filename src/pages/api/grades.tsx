import { NextApiRequest, NextApiResponse } from 'next'

import { getAllDocuments, connectDatabase, findOneGradeAndReplace } from '../../components/helpers/mongoDBUtils'
import { GradesListType } from '../../components/helpers/types'

async function handler(req: NextApiRequest, res: NextApiResponse) {
	let client

	try {
		client = await connectDatabase()
	} catch (error) {
		res.status(500).json({ message: 'Connecting to the database failed!' })
		return
	}

	if (req.method === 'POST') {
		const newGradesData = req.body
		let studentName = ''
		let gradeError = ''
		let dateError = ''
		let topicError = ''
		let categoryError = ''
		let weightError = ''

		// STUDENTNAME ERROR
		if (newGradesData.studentName !== null && newGradesData.studentName !== '0') {
			studentName = ''
		} else {
			studentName = 'You must choose the student!'
		}

		// GRADE ERROR
		if (newGradesData.grade !== null && newGradesData.grade !== '0') {
			gradeError = ''
		} else {
			gradeError = 'You must choose the grade!'
		}

		// DATE ERROR
		if (newGradesData.date !== null && newGradesData.date !== '') {
			dateError = ''
		} else {
			dateError = 'You must choose the date!'
		}

		// TOPIC ERROR
		if (newGradesData.topic !== null && newGradesData.date.trim() === '') {
			topicError = 'Topic cannot be empty!'
		} else if (newGradesData.topic !== null && newGradesData.topic.trim().length > 50) {
			topicError = 'Topic must be max. 50 letters long!'
		} else if (newGradesData.topic !== null) {
			topicError = ''
		}

		// CATEGORY ERROR
		if (newGradesData.category !== null && newGradesData.category !== '0') {
			categoryError = ''
		} else {
			categoryError = 'You must choose the category!'
		}

		// WEIGHT ERROR
		if (newGradesData.weight !== null) {
			weightError = ''
		} else {
			weightError = 'Chosen weight is wrong!'
		}

		let result

		if (
			studentName === '' &&
			gradeError === '' &&
			topicError === '' &&
			categoryError === '' &&
			weightError === '' &&
			dateError === ''
		) {
			try {
				const allGrades = await getAllDocuments(client, 'studentsgrades')
				const filter = { class: newGradesData.chosenClass }
				const updatedData = allGrades.map((gradesArr: GradesListType) => {
					if (gradesArr.class === newGradesData.chosenClass) {
						const studentName = newGradesData.studentName
						const subject = newGradesData.subject
						const newGrade = newGradesData.grade

						const addedGrade = {
							grade: newGrade,
							date: newGradesData.date,
							topic: newGradesData.topic,
							category: newGradesData.category,
							weight: newGradesData.weight,
						}

						if (newGradesData.grade === '+' || newGradesData.grade === '-') {
							const updatedPlusesArr = {
								...gradesArr,
								content: {
									...gradesArr.content,
									'Semester 2': {
										...gradesArr.content['Semester 2'],
										[studentName]: {
											...gradesArr.content['Semester 2'][studentName],
											[subject]: {
												...gradesArr.content['Semester 2'][studentName][subject],
												Pluses: [...gradesArr.content['Semester 2'][studentName][subject].Pluses, addedGrade],
											},
										},
									},
								},
							}
							return updatedPlusesArr
						} else {
							const updatedGradesArr = {
								...gradesArr,
								content: {
									...gradesArr.content,
									'Semester 2': {
										...gradesArr.content['Semester 2'],
										[studentName]: {
											...gradesArr.content['Semester 2'][studentName],
											[subject]: {
												...gradesArr.content['Semester 2'][studentName][subject],
												Grades: [...gradesArr.content['Semester 2'][studentName][subject].Grades, addedGrade],
											},
										},
									},
								},
							}
							return updatedGradesArr
						}
					} else {
						return { class: null }
					}
				})
				const filteredData = updatedData.filter((gradesArr: GradesListType) => gradesArr.class === filter.class)

				result = await findOneGradeAndReplace(client, 'studentsgrades', filter, filteredData)

				res.status(201).json({ message: 'Sucessfully added grade!' })
			} catch {
				res.status(500).json({ message: 'Added grade failed!' })
			}
		} else {
			res.status(422).json({ message: 'Invalid input.' })
		}
	}

	if (req.method === 'GET') {
		try {
			const allGrades = await getAllDocuments(client, 'studentsgrades')
			res.status(200).json({ grades: allGrades })
		} catch (error) {
			res.status(500).json({ message: 'Getting grades failed!' })
		}
	}
}

export default handler
