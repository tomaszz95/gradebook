import { NextApiRequest, NextApiResponse } from 'next'

import { getAllDocuments, connectDatabase } from '../../components/helpers/mongoDBUtils'

async function handler(req: NextApiRequest, res: NextApiResponse) {
	let client

	try {
		client = await connectDatabase()
	} catch (error) {
		res.status(500).json({ message: 'Connecting to the database failed!' })
		return
	}

	if (req.method === 'GET') {
		try {
			const allMessages = await getAllDocuments(client, 'messages')
			const messagesArr = allMessages[0]
			res.status(200).json({ messages: messagesArr })
		} catch (error) {
			res.status(500).json({ message: 'Getting messages failed!' })
		}
	}
}

export default handler
