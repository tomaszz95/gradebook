import Head from 'next/head'

import SidebarLayout from '../../components/layouts/SidebarLayout'
import TimetableView from '../../components/timetable/TimetableView'

const TeacherTimetablePage = () => {
	return (
		<SidebarLayout>
			<Head>
				<title>Timetable | Gradebook</title>
				<meta name='description' content='Check your timetable plan. Where, when and which class you should teach.' />
			</Head>
			{/* <TimetableView /> */}
		</SidebarLayout>
	)
}

export default TeacherTimetablePage
