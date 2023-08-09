import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'

import { getOneNews, getNewsPaths } from '../../../../components/helpers/newsUtils'
import { connectDatabase } from '../../../../components/helpers/mongoDBUtils'
import NewsDetail from '../../../../components/news/NewsDetail'
import SidebarLayout from '../../../../components/layouts/SidebarLayout'

import { SingleNewsDataType } from '../../../../components/helpers/types'

const TeacherSingleNewsPage: React.FC<{ singleNews: SingleNewsDataType }> = ({ singleNews }) => {
	return (
		<SidebarLayout>
			<Head>
				<title>{singleNews.title} | Gradebook</title>
				<meta name='description' content={singleNews.description} />
			</Head>
			<NewsDetail singleNews={singleNews} />
		</SidebarLayout>
	)
}

export default TeacherSingleNewsPage

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
