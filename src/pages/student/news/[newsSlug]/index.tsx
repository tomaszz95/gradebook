import { GetStaticProps, GetStaticPaths } from 'next'

import { getOneNews, getNewsPaths } from 'src/components/helpers/newsUtils'
import { connectDatabase } from 'src/components/helpers/mongoDBUtils'
import NewsDetail from 'src/components/news/NewsDetail'
import SidebarLayout from 'src/components/layouts/SidebarLayout'

import { SingleNewsDataType } from 'src/components/helpers/types'

const StudentSingleNewsPage: React.FC<{ singleNews: SingleNewsDataType }> = ({ singleNews }) => {
	return (
		<SidebarLayout>
			<NewsDetail singleNews={singleNews} />
		</SidebarLayout>
	)
}

export default StudentSingleNewsPage

export const getStaticProps: GetStaticProps = async context => {
	let newsSlug = ''
	if (context.params && typeof context.params.newsSlug === 'string') {
		newsSlug = context.params.newsSlug
	}
	const client = await connectDatabase()
	const news = await getOneNews(newsSlug, client)

	return {
		props: {
			singleNews: news,
		},
		revalidate: 60,
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const client = await connectDatabase()
	const allPaths = await getNewsPaths(client)

	return {
		paths: allPaths,
		fallback: 'blocking',
	}
}
