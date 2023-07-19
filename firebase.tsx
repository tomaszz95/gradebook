import { getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
let app

const firebaseConfig = {
	apiKey: 'AIzaSyAgX0QnSsHGra0A2sUwPBJhYpDs3NLA9Fo',
	authDomain: process.env.FIREBASE_AUTHDOMAIN,
	projectId: process.env.FIREBASE_PROJECTID,
	storageBucket: process.env.FIREBASE_STORAGEBUCKET,
	messagingSenderId: process.env.FIREBASE_MESSANGINGSENDERID,
	appId: process.env.FIREBASE_APPID,
}

if (getApps().length < 1) {
	app = initializeApp(firebaseConfig)
}

const auth = getAuth(app)
export default auth
