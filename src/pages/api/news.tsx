import { NextApiRequest, NextApiResponse } from 'next'

import {
	getAllDocuments,
	connectDatabase,
	insertDocument,
	deleteOneDocument
} from '../../components/helpers/mongoDBUtils'
import { NewsListFetchedType } from '../../components/helpers/types'

async function handler(req: NextApiRequest, res: NextApiResponse) {
	let client

	try {
		client = await connectDatabase()
	} catch (error) {
		res.status(500).json({ message: 'Connecting to the database failed!' })
		return
	}

	if (req.method === 'POST') {
		const fullNewsData = req.body
		let titleError = ''
		let descriptionError = ''
		let textError = ''
		let imageError = ''
		let authorError = ''
		let dateError = ''

		// TITLE ERROR
		if (fullNewsData.title !== null && fullNewsData.title.trim() !== '' && fullNewsData.title.trim().length <= 70) {
			titleError = ''
		} else if (fullNewsData.title !== null && fullNewsData.title.trim() === '') {
			titleError = 'Title cannot be empty!'
		} else if (fullNewsData.title !== null && fullNewsData.title.trim().length > 70) {
			titleError = 'Title must be shorter than 70 letters!'
		}

		// DESCRIPTION ERROR
		if (
			fullNewsData.description !== null &&
			fullNewsData.description.trim() !== '' &&
			fullNewsData.description.trim().length <= 400
		) {
			descriptionError = ''
		} else if (fullNewsData.description !== null && fullNewsData.description.trim() === '') {
			descriptionError = 'Description cannot be empty!'
		} else if (fullNewsData.description !== null && fullNewsData.description.trim().length > 400) {
			descriptionError = 'Description must be shorter than 400 letters!'
		}

		// TEXT ERROR
		if (fullNewsData.text !== null && fullNewsData.text.trim() !== '' && fullNewsData.text.trim().length <= 1500) {
			textError = ''
		} else if (fullNewsData.text !== null && fullNewsData.text.trim() === '') {
			textError = 'Text cannot be empty!'
		} else if (fullNewsData.text !== null && fullNewsData.text.trim().length > 1500) {
			textError = 'Text must be shorter than 1500 letters!'
		}

		// IMAGE ERROR
		if (
			fullNewsData.img !== null &&
			fullNewsData.img !== '' &&
			!fullNewsData.img.includes('jpg') &&
			!fullNewsData.img.includes('jpeg') &&
			!fullNewsData.img.includes('png')
		) {
			imageError = 'You must set proper image link!'
		} else if (fullNewsData.img !== null && fullNewsData.img.trim() === '') {
			imageError = 'Image input cannot be empty!'
		} else if (fullNewsData.img !== null && fullNewsData.img.trim() !== '') {
			imageError = ''
		}

		// AUTHOR ERROR
		if (fullNewsData.author !== null && fullNewsData.author.trim() !== '') {
			authorError = ''
		} else {
			authorError = 'Wrong author!'
		}

		// DATE ERROR
		if (fullNewsData.date !== null && fullNewsData.date.trim() !== '') {
			dateError = ''
		} else {
			dateError = 'Wrong date!'
		}

		let result

		if (
			titleError === '' &&
			descriptionError === '' &&
			textError === '' &&
			imageError === '' &&
			authorError === '' &&
			dateError === ''
		) {
			try {
				result = await insertDocument(client, 'news', fullNewsData)
				res.status(201).json({ message: 'Added new news.' })
			} catch {
				res.status(500).json({ message: 'Inserting news failed!' })
			}
		} else {
			res.status(422).json({ message: 'Invalid input.' })
		}
	}

	if (req.method === 'GET') {
		try {
			const allNews: NewsListFetchedType = await getAllDocuments(client, 'news')

			const sortedNews = allNews.map(news => ({
				...news,
				parsedDate: new Date(
					parseInt(news.date.slice(6, 10)),
					parseInt(news.date.slice(3, 5)) - 1,
					parseInt(news.date.slice(0, 2))
				),
			}))

			sortedNews.sort((a, b) => b.parsedDate.getTime() - a.parsedDate.getTime())

			const newsWithoutParsedDate = sortedNews.map(({ parsedDate, ...rest }) => rest)

			res.status(200).json({ news: newsWithoutParsedDate })
		} catch (error) {
			res.status(500).json({ message: 'Inserting news failed!.' })
		}
	}

	if (req.method === 'DELETE') {
		const newsId = req.query.id
		try {
			await deleteOneDocument(client, 'news', newsId)
			res.status(200).json({ message: 'Sucessfully deleted news!' })
		} catch (error) {
			res.status(500).json({ message: 'Delete news failed.' })
		}
	}
}

export default handler
