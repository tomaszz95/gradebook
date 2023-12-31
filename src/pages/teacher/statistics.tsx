import Head from 'next/head'

import SidebarLayout from '../../components/layouts/SidebarLayout'
import StatisticsView from '../../components/statisctics/StatisticsView'

const TeacherStatisticsPage = () => {
	return (
		<SidebarLayout>
			<Head>
				<title>Teacher school statistics | Gradebook</title>
				<meta
					name='description'
					content='Check and compare statistic of whole school and single class for your subject!'
				/>
			</Head>
			<StatisticsView />
		</SidebarLayout>
	)
}

export default TeacherStatisticsPage
