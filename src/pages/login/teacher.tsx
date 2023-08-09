import Head from 'next/head'

import TeacherLogin from '../../components/login/TeacherLogin'

const TeacherLoginPage = () => {
	return (
		<>
			<Head>
				<title>Teacher login | Gradebook</title>
				<meta name='description' content='Teacher login page' />
			</Head>
			<TeacherLogin />
		</>
	)
}

export default TeacherLoginPage
