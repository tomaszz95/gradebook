export async function getAllNews(client: any) {
	const db = client.db()

	const result = await db.collection('news').find().sort({ _id: -1 }).toArray()

	client.close()

	return result
}
