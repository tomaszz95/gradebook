import { NewsListFetchedType } from './types'

export async function getAllNews(client: any) {
	const db = client.db()

	const result = await db.collection('news').find().sort({ _id: -1 }).toArray()

	client.close()

	return result
}

export async function getOneNews(newsSlug: string, client: any) {
	const allNews: NewsListFetchedType = await getAllNews(client)

	let singleNews

	allNews.filter(news => {
		const slugTitle = news.title.toLowerCase().replaceAll(' ', '-')

		if (slugTitle === newsSlug) {
			singleNews = {
				...news,
				_id: JSON.stringify(news._id),
			}
		}
	})

	return singleNews
}

export async function getNewsPaths(client: any) {
	const allNews: NewsListFetchedType = await getAllNews(client)

	const paths = allNews.map(news => {
		const slugTitle = news.title.toLowerCase().replaceAll(' ', '-')
		return { params: { newsSlug: slugTitle } }
	})
	return paths
}
