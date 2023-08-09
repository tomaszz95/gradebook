import Head from 'next/head'

import GradesView from '../../../components/grades/GradesView'
import SidebarLayout from '../../../components/layouts/SidebarLayout'

const TeacherGradesPage = () => {
	return (
		<SidebarLayout>
			<Head>
				<title>Teacher grade list | Gradebook</title>
				<meta name='description' content='Check every class grade which you learn - compare and add new grade.' />
			</Head>
			<GradesView />
		</SidebarLayout>
	)
}

export default TeacherGradesPage
