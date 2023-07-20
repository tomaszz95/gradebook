import { connectDatabase } from '../../components/helpers/mongoDBUtils'
import { getAllNews } from '../../components/helpers/apiUtils'

async function handler(req: any, res: any) {
	// if (req.method === 'POST') {
	// 	const userEmail = req.body.email

	// 	if (!userEmail || !userEmail.includes('@')) {
	// 		res.status(422).json({ message: 'Invalid email address.' })
	// 		return
	// 	}

	// 	let client

	// 	try {
	// 		client = await connectDatabase()
	// 	} catch (error) {
	// 		res.status(500).json({ message: 'Connecting to the database failed!' })
	// 		return
	// 	}

	// 	try {
	// 		await insertDocument(client, 'newsletter', { email: userEmail })
	// 	} catch (error) {
	// 		res.status(500).json({ message: 'Inserting data failed!' })
	// 		return
	// 	}

	// 	res.status(201).json({ message: 'Signed up!' })
	// }

	if (req.method === 'GET') {
		let client, data

		try {
			client = await connectDatabase()
		} catch (error) {
			res.status(500).json({ message: 'Connecting to the database failed!' })
			return
		}

		try {
			data = await getAllNews(client)
		} catch (error) {
			res.status(500).json({ message: 'Fetching data failed!' })
			return
		}

		res.status(200).json({ message: 'Data fetched properly!' })

		return data
	}
}

export default handler
