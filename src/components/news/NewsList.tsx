import styles from './NewsList.module.css'
import SingleNews from './SingleNews'
import { useRouter } from 'next/router'

const dummyNews = [
	{
		title: 'Middle School Science Fair Celebrates Innovators',
		date: '27-06-2023',
		id: '32595192',
		author: 'Anna Kowalska',
		description: 'Young minds showcase brilliance in diverse science projects with winners to be announced soon.',
		text: "This weekend, the middle school hosted its annual Science Fair, showcasing brilliant young minds and innovative projects. Students presented studies on environmental issues, advanced technology, and more. The fair fosters scientific curiosity, teamwork, and communication skills. Principal praised the students' dedication, nurturing the next generation of problem solvers. Winners will be announced next week during the assembly, receiving recognition and awards for their outstanding contributions to science.",
	},
	{
		title: 'Debaters Shine in Tournament',
		date: '24-06-2023',
		id: '85195492',
		author: 'Michał Nowak',
		description: 'Debate team excels in regional tournament, clinches top individual speaker spots.',
		text: "Middle school debate team achieves remarkable success in regional tournament. Debaters showcased exceptional critical thinking, persuasion, and teamwork. They secured the first position, while the biggest rival in same city claimed the second spot in individual speaker rankings. Coaches expressed immense pride in students' dedication. They are now preparing for upcoming competitions, aiming to continue their winning streak.",
	},
	{
		title: 'Middle School Robotics Team Excels in State Competition',
		date: '18-06-2023',
		id: '2548154',
		author: 'Anna Kowalska',
		description:
			'Middle school robotics team wins accolades in state-level competition; Engineers of the future showcase their ingenuity.',
		text: "The middle school's robotics team emerged victorious in a prestigious state-level competition, demonstrating their exceptional engineering skills and creative problem-solving abilities. The team, comprising students from different grades, designed and programmed robots to tackle various challenges. Their innovative approach and precise execution wowed the judges and fellow competitors alike. The team invested countless hours in practice, refining their robots' performance. Their hard work and dedication paid off as they clinched the top spot in the competition. Principal expressed immense pride in the students' achievements, emphasizing the importance of fostering a passion for STEM (Science, Technology, Engineering, and Mathematics) fields. The robotics team's success serves as an inspiration to aspiring engineers, demonstrating that determination and teamwork can lead to remarkable accomplishments.",
	},
	{
		title: 'School Art Show Awes Community',
		date: '11-06-2023',
		id: '52946184',
		author: 'Michał Nowak',
		description: 'Artistic talents shine in an impressive display of creativity and expression.',
		text: "The middle school's art show wowed the community, as students showcased their artistic talents in an impressive display of creativity and expression. From stunning paintings to intricate sculptures, the artwork captivated visitors. Parents, teachers, and fellow students praised the artists' skills and emotional depth. Principal lauded the art department's efforts to encourage self-expression and cultivate the students' creativity. The event left a lasting impression, inspiring many to explore their artistic passions further.",
	},
]

const NewsList = () => {
	const router = useRouter()
	const whoIsLogged = router.pathname.includes('student') ? 'student' : 'teacher'

	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Latest News</h2>
			<ul className={styles.list}>
				{dummyNews.map(news => (
					<SingleNews
						title={news.title}
						date={news.date}
						id={news.id}
						text={news.text}
						key={news.id}
						author={news.author}
					/>
				))}
			</ul>
			{whoIsLogged === 'teacher' ? (
				<button onClick={() => router.push(`/${whoIsLogged}/news/create-news`)} className={styles.newButton}>
					Add new news
				</button>
			) : null}
		</div>
	)
}

export default NewsList
