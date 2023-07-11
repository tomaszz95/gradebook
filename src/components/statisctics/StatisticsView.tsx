import StatisticsContent from './StatisticsContent'
import styles from './StatisticsView.module.css'

const dummyData3C = {
	'Jacek Kowalski': {
		'Semester 1': {
			German: {
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
			Biology: {
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
			IT: {
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
			English: {
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
				Grades: [],
			},
			Polish: {
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
			Mathematics: {
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
			PE: {
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
			Chemistry: {
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
			History: {
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
			Art: {
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
			Geography: {
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
			Physic: {
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
			German: {
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
						grade: '2',
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
			Biology: {
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
			IT: {
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
			English: {
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
			Polish: {
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
			Mathematics: {
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
			PE: {
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
			Chemistry: {
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
			History: {
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
			Art: {
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
			Geography: {
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
			Physic: {
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
	},
	'Maryla Rodowicz': {
		'Semester 1': {
			German: {
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
						grade: '2',
						date: '21-04-2023',
						topic: 'Lorem ipsum',
						category: 'Card',
						weight: 1,
					},
				],
			},
			Biology: {
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
						grade: '6',
						date: '21-04-2023',
						topic: 'Lorem ipsum',
						category: 'Card',
						weight: 1,
					},
				],
			},
			IT: {
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
			English: {
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
						grade: '2',
						date: '21-04-2023',
						topic: 'Lorem ipsum',
						category: 'Card',
						weight: 1,
					},
				],
			},
			Polish: {
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
						grade: '5+',
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
			Mathematics: {
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
						grade: '5-',
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
						grade: '3',
						date: '21-04-2023',
						topic: 'Lorem ipsum',
						category: 'Card',
						weight: 1,
					},
				],
			},
			PE: {
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
						grade: '2',
						date: '21-04-2023',
						topic: 'Lorem ipsum',
						category: 'Card',
						weight: 1,
					},
				],
			},
			Chemistry: {
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
						grade: '3+',
						date: '14-03-2023',
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
						grade: '3-',
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
			History: {
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
						grade: '5',
						date: '21-04-2023',
						topic: 'Lorem ipsum',
						category: 'Card',
						weight: 1,
					},
				],
			},
			Art: {
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
					{
						grade: '2',
						date: '21-04-2023',
						topic: 'Lorem ipsum',
						category: 'Card',
						weight: 1,
					},
				],
			},
			Geography: {
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
						grade: '3',
						date: '21-04-2023',
						topic: 'Lorem ipsum',
						category: 'Card',
						weight: 1,
					},
				],
			},
			Physic: {
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
			German: {
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
						grade: '2',
						date: '21-04-2023',
						topic: 'Lorem ipsum',
						category: 'Card',
						weight: 1,
					},
				],
			},
			Biology: {
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
						grade: '6',
						date: '21-04-2023',
						topic: 'Lorem ipsum',
						category: 'Card',
						weight: 1,
					},
				],
			},
			IT: {
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
			English: {
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
						grade: '2',
						date: '21-04-2023',
						topic: 'Lorem ipsum',
						category: 'Card',
						weight: 1,
					},
				],
			},
			Polish: {
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
						grade: '5+',
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
			Mathematics: {
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
						grade: '5-',
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
						grade: '3',
						date: '21-04-2023',
						topic: 'Lorem ipsum',
						category: 'Card',
						weight: 1,
					},
				],
			},
			PE: {
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
						grade: '2',
						date: '21-04-2023',
						topic: 'Lorem ipsum',
						category: 'Card',
						weight: 1,
					},
				],
			},
			Chemistry: {
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
						grade: '3+',
						date: '14-03-2023',
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
						grade: '3-',
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
			History: {
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
						grade: '5',
						date: '21-04-2023',
						topic: 'Lorem ipsum',
						category: 'Card',
						weight: 1,
					},
				],
			},
			Art: {
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
					{
						grade: '2',
						date: '21-04-2023',
						topic: 'Lorem ipsum',
						category: 'Card',
						weight: 1,
					},
				],
			},
			Geography: {
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
						grade: '3',
						date: '21-04-2023',
						topic: 'Lorem ipsum',
						category: 'Card',
						weight: 1,
					},
				],
			},
			Physic: {
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
	},
}

const dummyClass = '3C'

const StatisticsView = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Check your and yours class statistics!</h2>
			<StatisticsContent classData={dummyData3C} schoolClassName={dummyClass} />
		</div>
	)
}

export default StatisticsView
