import styles from './TimetableView.module.css'
import TimetableTable from './TimeTableTable'

const dummyData = {
	name: 'Janusz Tracz',
	class: '3A',
}

const timetable1A: any = {
	1: {
		Monday: {
			subject: 'German',
			class: '7',
		},
		Tuesday: {
			subject: 'Biology',
			class: '5',
		},
		Wednesday: {
			subject: null,
			class: null,
		},
		Thursday: {
			subject: 'IT',
			class: '10',
		},
		Friday: {
			subject: 'English',
			class: '11',
		},
	},
	2: {
		Monday: {
			subject: 'German',
			class: '7',
		},
		Tuesday: {
			subject: 'Polish',
			class: '13',
		},
		Wednesday: {
			subject: 'Polish',
			class: '13',
		},
		Thursday: {
			subject: 'Mathematics',
			class: '9',
		},
		Friday: {
			subject: 'English',
			class: '11',
		},
	},
	3: {
		Monday: {
			subject: 'PE',
			class: '20',
		},
		Tuesday: {
			subject: 'Chemistry',
			class: '3',
		},
		Wednesday: {
			subject: 'History',
			class: '1',
		},
		Thursday: {
			subject: 'Mathematics',
			class: '9',
		},
		Friday: {
			subject: 'PE',
			class: '20',
		},
	},
	4: {
		Monday: {
			subject: 'Mathematics',
			class: '9',
		},
		Tuesday: {
			subject: 'Mathematics',
			class: '9',
		},
		Wednesday: {
			subject: 'Art',
			class: '2',
		},
		Thursday: {
			subject: 'History',
			class: '1',
		},
		Friday: {
			subject: 'Biology',
			class: '5',
		},
	},
	5: {
		Monday: {
			subject: 'Geography',
			class: '13',
		},
		Tuesday: {
			subject: 'Physic',
			class: '6',
		},
		Wednesday: {
			subject: 'English',
			class: '11',
		},
		Thursday: {
			subject: 'Polish',
			class: '13',
		},
		Friday: {
			subject: 'Physic',
			class: '6',
		},
	},
	6: {
		Monday: {
			subject: 'Physic',
			class: '6',
		},
		Tuesday: {
			subject: 'IT',
			class: '10',
		},
		Wednesday: {
			subject: 'PE',
			class: '20',
		},
		Thursday: {
			subject: 'Polish',
			class: '13',
		},
		Friday: {
			subject: 'Geography',
			class: '13',
		},
	},
	7: {
		Monday: {
			subject: 'Music',
			class: '15',
		},
		Tuesday: {
			subject: null,
			class: null,
		},
		Wednesday: {
			subject: 'Mathematics',
			class: '9',
		},
		Thursday: {
			subject: 'Geography',
			class: '13',
		},
		Friday: {
			subject: null,
			class: null,
		},
	},
	8: {
		Monday: {
			subject: 'Chemistry',
			class: '3',
		},
		Tuesday: {
			subject: null,
			class: null,
		},
		Wednesday: {
			subject: 'IT',
			class: '10',
		},
		Thursday: {
			subject: 'German',
			class: '7',
		},
		Friday: {
			subject: null,
			class: null,
		},
	},
}

const TimeTable = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.header}>
				Timetable - <span>{dummyData.name}</span> <span>{dummyData.class}</span>
			</h2>
			<TimetableTable lessonsTimetable={timetable1A} />
		</div>
	)
}

export default TimeTable
