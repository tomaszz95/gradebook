import SidebarLayout from 'src/components/layouts/SidebarLayout'
import NewsList from 'src/components/news/NewsList'

const StudentNewsPage = (allNews: any) => {
	console.log(allNews)
	return (
		<SidebarLayout>
			<NewsList />
		</SidebarLayout>
	)
}

export default StudentNewsPage

export async function getStaticProps() {
	const response = await fetch('/api/news')
	const allNews = await response.json()

	return {
		props: {
			allNews,
		},
		revalidate: 600,
	}
}
