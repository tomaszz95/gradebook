import Head from 'next/head'

import SidebarLayout from 'src/components/layouts/SidebarLayout'
import TimeTableView from 'src/components/timetable/TimetableView'

const StudentTimetablePage = () => {
	return (
		<SidebarLayout>
			<Head>
				<title>Timetable | Gradebook</title>
				<meta
					name='description'
					content='Check your lessons plan, what subject and in what class you should be in what time.'
				/>
			</Head>
			<TimeTableView />
		</SidebarLayout>
	)
}

export default StudentTimetablePage
