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
			const allGrades = await getAllDocuments(client, 'studentsgrades')
			res.status(200).json({ grades: allGrades })
		} catch (error) {
			res.status(500).json({ message: 'Getting grades failed!' })
		}
	}
}

export default handler
