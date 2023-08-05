import Head from 'next/head'
import SidebarLayout from 'src/components/layouts/SidebarLayout'
import AddNews from 'src/components/news/AddNews'

const TeacherCreateNewsPage = () => {
	return (
		<SidebarLayout>
			<Head>
				<title>Create new news | Gradebook</title>
				<meta
					name='description'
					content='Create new news from upcoming events in school or write some usefull informations!'
				/>
			</Head>
			<AddNews />
		</SidebarLayout>
	)
}

export default TeacherCreateNewsPage
