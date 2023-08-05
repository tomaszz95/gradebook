import Head from 'next/head'
import SidebarLayout from 'src/components/layouts/SidebarLayout'
import NewsList from 'src/components/news/NewsList'

const StudentNewsPage = () => {
	return (
		<SidebarLayout>
			<Head>
				<title>Check the newest news | Gradebook</title>
				<meta
					name='description'
					content='Check the newest newst from your school! Read and get informed about all events that will come.'
				/>
			</Head>
			<NewsList />
		</SidebarLayout>
	)
}

export default StudentNewsPage
