import {
	GradesType,
	SingleGradesType,
	GradesSubjectType,
	GradesNamesType,
	GradesListType,
	StatisticsObjectStudentDataType,
	StatisticsAveragePush,
	StatisticsSubjectsType,
} from './types'

export const countAverage = (subjectData: GradesType) => {
	const gradesArray: number[] = []
	const weightArray: number[] = []
	let gradesSum: number = 0
	let weightSum: number = 0

	subjectData.map((data: SingleGradesType) => {
		switch (data.grade) {
			case '1+':
				gradesArray.push(1.5)
				weightArray.push(+data.weight)
				break
			case '2-':
				gradesArray.push(1.75)
				weightArray.push(+data.weight)
				break
			case '2+':
				gradesArray.push(2.5)
				weightArray.push(+data.weight)
				break
			case '3-':
				gradesArray.push(2.75)
				weightArray.push(+data.weight)
				break
			case '3+':
				gradesArray.push(3.5)
				weightArray.push(+data.weight)
				break
			case '4-':
				gradesArray.push(3.75)
				weightArray.push(+data.weight)
				break
			case '4+':
				gradesArray.push(4.5)
				weightArray.push(+data.weight)
				break
			case '5-':
				gradesArray.push(4.75)
				weightArray.push(+data.weight)
				break
			case '5+':
				gradesArray.push(5.5)
				weightArray.push(+data.weight)
				break
			case '6-':
				gradesArray.push(5.75)
				weightArray.push(+data.weight)
				break
			default:
				gradesArray.push(+data.grade)
				weightArray.push(+data.weight)
		}
	})

	for (let i = 0; i < gradesArray.length; i++) {
		gradesSum += gradesArray[i] * weightArray[i]
		weightSum += weightArray[i]
	}

	const average = (gradesSum / weightSum).toFixed(2)
	return average
}

export const countStatisticsWholeClassAverage = (
	averageData: StatisticsObjectStudentDataType[] | any,
	semester: string,
	subjectsArr: string[]
) => {
	const subjectAverages: { [key: string]: string }[] = []

	subjectsArr.forEach(subject => {
		let sum = 0
		let count = 0

		averageData.forEach((student: any) => {
			sum += parseFloat(student.averages[semester][subject])
			count++
		})

		if (count > 0) {
			const averageSum = sum / count
			const average = averageSum.toFixed(2).toString()
			subjectAverages.push({ subject, average })
		}
	})

	return subjectAverages
}

export const countEndGrade = (average: string) => {
	let endMark: string

	if (+average < 1.69) {
		endMark = '1'
	} else if (+average < 2.69) {
		endMark = '2'
	} else if (+average < 3.69) {
		endMark = '3'
	} else if (+average < 4.69) {
		endMark = '4'
	} else if (+average < 5.3) {
		endMark = '5'
	} else {
		endMark = '6'
	}

	return endMark
}

export const findAllSubjects = (subjects: GradesSubjectType | StatisticsSubjectsType) => {
	let subjectsArr = []

	for (const subject in subjects) {
		subjectsArr.push(subject)
	}

	return subjectsArr
}

export const findAllNames = (namesList: GradesNamesType) => {
	let namesArray = []

	for (const name in namesList) {
		namesArray.push(name)
	}

	return namesArray
}

export const addBackgroundColor = (grade: string) => {
	let colorClass

	if (+grade < 1.99) {
		colorClass = 'bad'
	} else if (+grade < 2.99) {
		colorClass = 'better'
	} else if (+grade < 3.99) {
		colorClass = 'medium'
	} else {
		colorClass = 'hight'
	}
	return colorClass
}

export const countWeight = (grade: string) => {
	let gradeWeight

	switch (grade) {
		case 'Activity':
			gradeWeight = 1
			break
		case 'Homework':
			gradeWeight = 2
			break
		case 'Card':
			gradeWeight = 4
			break
		case 'Verbal':
			gradeWeight = 3
			break
		case 'Test':
			gradeWeight = 5
			break
		default:
			gradeWeight = 1
	}
	return gradeWeight
}

export const statisticsStudentData = (classData: GradesListType) => {
	let studentsArray: StatisticsObjectStudentDataType[] = []

	for (const semester in classData.content) {
		const semesterData = classData.content[semester]
		if (semester === 'Semester 1') {
			for (const studentName in semesterData) {
				const studentObject: StatisticsObjectStudentDataType = {
					_id: Math.random().toString(),
					name: studentName,
					averages: {
						[semester]: {},
					},
				}
				const studentData = semesterData[studentName]

				for (const subject in studentData) {
					const gradesArray = studentData[subject].Grades
					const subjectWeightedAverage = countAverage(gradesArray)

					studentObject.averages[semester][subject] = subjectWeightedAverage
				}

				studentsArray.push(studentObject)
			}
		} else {
			for (const studentName in semesterData) {
				const studentSecondObject: StatisticsAveragePush = {
					[semester]: {},
				}
				const studentData = semesterData[studentName]

				for (const subject in studentData) {
					const gradesArray = studentData[subject].Grades
					const subjectWeightedAverage = countAverage(gradesArray)

					studentSecondObject[semester][subject] = subjectWeightedAverage
				}

				studentsArray.map(singleStudent => {
					let updatedObject
					if (singleStudent.name === studentName) {
						updatedObject = {
							...singleStudent,
							averages: {
								...singleStudent.averages,
								...studentSecondObject,
							},
						}
						const filteredArray = studentsArray.filter(array => array.name !== studentName)
						studentsArray = filteredArray
						studentsArray.push(updatedObject)
					}
				})
			}
		}
	}

	return studentsArray
}
