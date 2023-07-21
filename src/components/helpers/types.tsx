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
	}
]

//NEWS LIST DATA
export type SingleNewsDataType = {
	author: string
	date: string
	description: string
	title: string
	img: string
}
