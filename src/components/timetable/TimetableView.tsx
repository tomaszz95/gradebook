import styles from './TimetableView.module.css'
import TimetableTable from './TimeTableTable'
import { useRouter } from 'next/router'

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

const timetableTeacher: any = {
	1: {
		Monday: {
			group: null,
			class: null,
		},
		Tuesday: {
			group: null,
			class: null,
		},
		Wednesday: {
			group: null,
			class: null,
		},
		Thursday: {
			group: '3C',
			class: '6',
		},
		Friday: {
			group: '3C',
			class: '6',
		},
	},
	2: {
		Monday: {
			group: '1B',
			class: '6',
		},
		Tuesday: {
			group: '3B',
			class: '6',
		},
		Wednesday: {
			group: '3A',
			class: '6',
		},
		Thursday: {
			group: '3A',
			class: '6',
		},
		Friday: {
			group: '2A',
			class: '6',
		},
	},
	3: {
		Monday: {
			group: '2B',
			class: '5',
		},
		Tuesday: {
			group: '2C',
			class: '3',
		},
		Wednesday: {
			group: '2A',
			class: '3',
		},
		Thursday: {
			group: '1A',
			class: '5',
		},
		Friday: {
			group: '2A',
			class: '3',
		},
	},
	4: {
		Monday: {
			group: '1B',
			class: '3',
		},
		Tuesday: {
			group: '1C',
			class: '5',
		},
		Wednesday: {
			group: '3C',
			class: '3',
		},
		Thursday: {
			group: '3A',
			class: '5',
		},
		Friday: {
			group: '3B',
			class: '5',
		},
	},
	5: {
		Monday: {
			group: '2A',
			class: '6',
		},
		Tuesday: {
			group: '3A',
			class: '6',
		},
		Wednesday: {
			group: '1A',
			class: '6',
		},
		Thursday: {
			group: '2B',
			class: '6',
		},
		Friday: {
			group: '2A',
			class: '6',
		},
	},
	6: {
		Monday: {
			group: '2C',
			class: '6',
		},
		Tuesday: {
			group: '1A',
			class: '3',
		},
		Wednesday: {
			group: '1C',
			class: '3',
		},
		Thursday: {
			group: '1B',
			class: '3',
		},
		Friday: {
			group: '3A',
			class: '3',
		},
	},
	7: {
		Monday: {
			group: '3B',
			class: '3',
		},
		Tuesday: {
			group: '3C',
			class: '3',
		},
		Wednesday: {
			group: null,
			class: null,
		},
		Thursday: {
			group: null,
			class: null,
		},
		Friday: {
			group: null,
			class: null,
		},
	},
	8: {
		Monday: {
			group: 'Chemistry',
			class: '3',
		},
		Tuesday: {
			group: null,
			class: null,
		},
		Wednesday: {
			group: 'IT',
			class: '10',
		},
		Thursday: {
			group: 'German',
			class: '7',
		},
		Friday: {
			group: null,
			class: null,
		},
	},
}

const TimeTable = () => {
	const router = useRouter()
	const timetableArray = router.pathname.includes('student') ? timetable1A : timetableTeacher

	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Check your lessons!</h2>
			<TimetableTable lessonsTimetable={timetableArray} />
		</div>
	)
}

export default TimeTable
