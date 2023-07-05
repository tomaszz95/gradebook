import styles from './GradesView.module.css'
import GradesTable from './GradesTable'

const dummyData = {
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
	'Semester 2': {
		German: {
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
					grade: '2-',
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
					grade: '1',
					date: '23-02-2023',
					topic: 'Lorem ipsum',
					category: 'Test',
					weight: 2,
				},
				{
					grade: '5-',
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
					grade: '3',
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
					grade: '4',
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
				{
					grade: '4',
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
					grade: '3',
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
					grade: '1',
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
					grade: '3+',
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
					grade: '1',
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
					grade: '5',
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
					grade: '4',
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

const GradesView = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Check your grades!</h2>
			<GradesTable gradesData={dummyData} />
		</div>
	)
}

export default GradesView
