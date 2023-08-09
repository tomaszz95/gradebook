import Head from 'next/head'

import AddGrade from '../../../../components/grades/AddGrade'
import SidebarLayout from '../../../../components/layouts/SidebarLayout'

const TeacherAddGradePage = () => {
	return (
		<SidebarLayout>
			<Head>
				<title>Add new grade | Gradebook</title>
				<meta name='description' content='Add new grade to some student you learn.' />
			</Head>
			<AddGrade />
		</SidebarLayout>
	)
}

export default TeacherAddGradePage
