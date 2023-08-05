import Head from 'next/head'

import SidebarLayout from 'src/components/layouts/SidebarLayout'
import StatisticsView from 'src/components/statisctics/StatisticsView'

const StudentStatisticsPage = () => {
	return (
		<SidebarLayout>
			<Head>
				<title>Student school statistics | Gradebook</title>
				<meta
					name='description'
					content='Check and compare your statistics with other students from your class. See statistics of every subject from semester!'
				/>
			</Head>
			<StatisticsView />
		</SidebarLayout>
	)
}

export default StudentStatisticsPage
