export const countAverage = (subjectData: any) => {
	const gradesArray: number[] = []
	const weightArray: number[] = []
	let gradesSum: number = 0
	let weightSum: number = 0

	subjectData.map((data: any) => {
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

export const countWholeClassAverage = (classData: any, stringSemester: string, subjectArr: any, isStudent: boolean) => {
	let averageObj = {}
	if (isStudent) {
		for (const data in classData) {
			subjectArr.map((subject: string) => {
				return (averageObj = {
					...averageObj,
					[subject]: {
						average: countAverage(classData[data][stringSemester][subject].Grades),
					},
				})
			})
		}
	} else {
		subjectArr.map((subject: string) => {
			return (averageObj = {
				...averageObj,
				[subject]: {
					average: countAverage(classData[stringSemester][subject].Grades),
				},
			})
		})
	}
	return averageObj
}

export const findAllObjects = (subjects: any) => {
	let subjectsArr = []
	for (const subject in subjects) {
		subjectsArr.push(subject)
	}
	return subjectsArr
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
