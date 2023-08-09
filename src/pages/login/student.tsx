import Head from 'next/head'

import StudentLogin from '../../components/login/StudentLogin'

const StudentLoginPage = () => {
	return (
		<>
			<Head>
				<title>Student login | Gradebook</title>
				<meta name='description' content='Student login page' />
			</Head>
			<StudentLogin />
		</>
	)
}

export default StudentLoginPage
