// CHILDREN LAYOUT
export type ChildrenLayoutType = {
	children: React.ReactNode
}

// FORM DATA
export type FormDataType = {
	password: string
	identifier: string
	username: string
}

// LOGIN FORM COMPONENT
export type LoginFormComponentType = {
	type: string
	onFormData: (formData: FormDataType) => void
}

//NEWS LIST DATA
export type NewsListFetchedType = [
	{
		author: string
		date: string
		description: string
		title: string
		img: string
		_id: string
		text: string
		delete: boolean
		parsedDate?: any
	}
]

//NEWS LIST SINGLE DATA
export type SingleNewsDataType = {
	author: string
	date: string
	description: string
	title: string
	img: string
	text: string
	_id: string
	delete: boolean
}

//NEWS LIST SINGLE DATA + ROLE
export type SingleNewsDataRoleType = {
	newsData: SingleNewsDataType
	role: string
}

// NEW NEWS FORM
export type NewNewsFormData = {
	description: string
	title: string
	img: string
	text: string
}

// LOGINDATA
export type LoginDataType = {
	role: string
	name: string
	img: string
	belong: string
	email: string
}
