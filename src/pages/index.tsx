import Head from 'next/head'
import HomepageView from 'src/components/homepage/HomepageView'

const HomePage = () => {
	return (
		<>
			<Head>
				<title>Gradebook</title>
			</Head>
			<HomepageView />
		</>
	)
}

export default HomePage
