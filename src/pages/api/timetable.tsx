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
			const allTimetables = await getAllDocuments(client, 'timetable')
			res.status(200).json({ timetable: allTimetables })
		} catch (error) {
			res.status(500).json({ message: 'Getting timetable failed!' })
		}
	}
}

export default handler
