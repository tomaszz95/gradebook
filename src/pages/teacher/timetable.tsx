import Head from 'next/head'

import SidebarLayout from 'src/components/layouts/SidebarLayout'
import TimeTableView from 'src/components/timetable/TimetableView'

const TeacherTimetablePage = () => {
	return (
		<SidebarLayout>
			<Head>
				<title>Timetable | Gradebook</title>
				<meta name='description' content='Check your timetable plan. Where, when and which class you should teach.' />
			</Head>
			<TimeTableView />
		</SidebarLayout>
	)
}

export default TeacherTimetablePage
