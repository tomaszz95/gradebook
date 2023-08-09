import Head from 'next/head'

import SidebarLayout from '../../components/layouts/SidebarLayout'
import TimetableView from '../../components/timetable/TimetableView'

const StudentTimetablePage = () => {
    return (
        <SidebarLayout>
            <Head>
                <title>Timetable | Gradebook</title>
                <meta
                    name="description"
                    content="Check your lessons plan, what subject and in what class you should be in what time."
                />
            </Head>
            <TimetableView />
        </SidebarLayout>
    )
}

export default StudentTimetablePage
