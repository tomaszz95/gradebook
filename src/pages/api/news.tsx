import { getAllDocuments, connectDatabase } from '../../components/helpers/mongoDBUtils'

async function handler(req: any, res: any) {
	let client

	try {
		client = await connectDatabase()
	} catch (error) {
		res.status(500).json({ message: 'Connecting to the database failed!' })
		return
	}

	// if (req.method === 'POST') {
	// 	const { email, name, text } = req.body

	// 	if (!email.includes('@') || !name || name.trim() === '' || !text || text.trim() === '') {
	// 		res.status(422).json({ message: 'Invalid input.' })
	// 		return
	// 	}

	// 	const newComment = {
	// 		email,
	// 		name,
	// 		text,
	// 		eventId,
	// 	}

	// 	let result

	// 	try {
	// 		result = await insertDocument(client, 'comments', newComment)
	// 		newComment._id = result.insertedId
	// 		res.status(201).json({ message: 'Added comment.', comment: newComment })
	// 	} catch (error) {
	// 		res.status(500).json({ message: 'Inserting comment failed!' })
	// 	}
	// }

	if (req.method === 'GET') {
		try {
			const documents = await getAllDocuments(client, 'news', { date: -1 })
			res.status(200).json({ news: documents })
		} catch (error) {
			res.status(500).json({ message: 'Getting comments failed.' })
		}
	}
}

export default handler
