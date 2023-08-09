import axios from 'axios'
import sizeOf from 'image-size'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'POST') {
		const { imageURL } = req.body

		try {
			const response = await axios.get(imageURL, { responseType: 'arraybuffer' })
			const dimensions = sizeOf(response.data)

			if (dimensions.width && dimensions.height) {
				const validExtensions = ['.jpg', '.jpeg', '.png']
				const lowercasedURL = imageURL.toLowerCase()
				const hasValidExtension = validExtensions.some(extension => lowercasedURL.endsWith(extension))

				if (hasValidExtension) {
					res.status(200).json({ isValid: true })
				} else {
					res.status(400).json({ isValid: false })
				}
			} else {
				res.status(400).json({ isValid: false })
			}
		} catch (error) {
			res.status(400).json({ isValid: false })
		}
	}
}
