import { MongoClient } from 'mongodb'

export async function connectDatabase() {
	const client = await MongoClient.connect('mongodb+srv://tomasz:tomasz12345678@cluster0.p5pqqsa.mongodb.net/gradebook')
	return client
}

export async function insertDocument(client: any, collection: string, document: any) {
	const db = client.db()

	const result = await db.collection(collection).insertOne(document)

	return result
}

export async function getAllDocuments(client: any, collection: string, sort: any) {
	const db = client.db()

	const documents = await db.collection(collection).find().sort(sort).toArray()

	return documents
}
