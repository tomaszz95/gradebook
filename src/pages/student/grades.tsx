import Head from 'next/head'

import GradesView from '../../components/grades/GradesView'
import SidebarLayout from '../../components/layouts/SidebarLayout'

const StudentGradesPage = () => {
	return (
		<SidebarLayout>
			<Head>
				<title>Student grade list | Gradebook</title>
				<meta name='description' content='Check your grades in every subject from two last semesters.' />
			</Head>
			<GradesView />
		</SidebarLayout>
	)
}

export default StudentGradesPage
