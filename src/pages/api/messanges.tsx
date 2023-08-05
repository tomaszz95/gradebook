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
			const allMessanges = await getAllDocuments(client, 'messanges')
			const messangesArr = allMessanges[0]
			res.status(200).json({ messanges: messangesArr })
		} catch (error) {
			res.status(500).json({ message: 'Getting messanges failed!' })
		}
	}
}

export default handler
