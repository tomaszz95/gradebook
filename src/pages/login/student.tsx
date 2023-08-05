import Head from 'next/head'

import StudentLogin from 'src/components/login/StudentLogin'

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
