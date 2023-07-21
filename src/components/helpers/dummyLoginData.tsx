const dummeLoginData: any = {
	'student1@student.com': {
		role: 'Student',
		belong: '3C',
		name: 'Tomasz Wójcik',
		img: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
	},
	'student2@student.com': {
		role: 'Student',
		belong: '1A',
		name: 'Magdalena Okno',
		img: 'https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg',
	},
	'teacher1@student.com': {
		role: 'Teacher',
		belong: 'Math',
		name: 'Michał Nowak',
		img: 'https://cdn.pixabay.com/photo/2016/03/24/09/10/man-1276384_1280.jpg',
	},
	'teacher2@student.com': {
		role: 'Teacher',
		belong: 'Geography',
		name: 'Anna Kowalska',
		img: 'https://cdn.pixabay.com/photo/2018/03/06/22/57/portrait-3204843_1280.jpg',
	},
}

export const getLoginData = (email: string) => {
	const loginData = dummeLoginData[email]
	return loginData
}
