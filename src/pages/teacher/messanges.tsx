import Head from 'next/head'

import SidebarLayout from 'src/components/layouts/SidebarLayout'
import MessangeList from 'src/components/messanges/MessangeList'

const TeacherMessangesPage = () => {
	return (
		<SidebarLayout>
			<Head>
				<title>Messanges | Gradebook</title>
				<meta name='description' content='Messanges page - read and write interesting texts' />
			</Head>
			<MessangeList />
		</SidebarLayout>
	)
}

export default TeacherMessangesPage
