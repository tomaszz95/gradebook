import Head from 'next/head'

import SidebarLayout from 'src/components/layouts/SidebarLayout'
import MessageList from 'src/components/messages/MessageList'

const TeacherMessagesPage = () => {
	return (
		<SidebarLayout>
			<Head>
				<title>Messages | Gradebook</title>
				<meta name='description' content='Messages page - read and write interesting texts' />
			</Head>
			<MessageList />
		</SidebarLayout>
	)
}

export default TeacherMessagesPage
