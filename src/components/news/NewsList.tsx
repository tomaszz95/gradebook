import styles from './NewsList.module.css'
import SingleNews from './SingleNews'
import { useRouter } from 'next/router'

const dummyNews = [
	{
		title: 'Local Artist Wins Prestigious International Art Prize',
		date: '02-07-2023',
		id: 'news1',
		author: 'Anna Nowak',
		text: "Mapleville-based artist, Sarah Thompson, has been awarded the prestigious International Art Prize for her captivating masterpiece titled 'Reflections of Serenity.' The artwork, which combines vibrant colors and intricate brushwork, stood out among thousands of entries from around the world.",
	},
	{
		title: 'Student Robotics Team from Mapleville High School Wins National Competition',
		date: '24-06-2023',
		id: 'news2',
		author: 'Michał Wiśniewski',
		text: "Mapleville High School's robotics team, known as the 'Mechanical Mavericks,' achieved a remarkable victory at the National Robotics Competition held in Washington, D.C. The team, comprised of talented students from various grade levels, showcased their exceptional engineering skills and teamwork throughout the intense competition.",
	},
	{
		title: 'Mapleville Elementary School Launches Interactive Learning Garden',
		date: '11-06-2023',
		id: 'news3',
		author: 'Zygmunt Poniatowski',
		text: 'Mapleville Elementary School has embarked on a green educational journey with the launch of their interactive learning garden. The garden, a collaborative effort between students, teachers, and local community members, provides a hands-on outdoor classroom where students can explore various aspects of horticulture, ecology, and sustainable living.',
	},
	{
		title: 'Student Initiative Raises Funds for Local Charity',
		date: '01-06-2023',
		id: 'news4',
		author: 'Mikołaj Kopernik',
		text: 'Students at Mapleville Middle School showcased their incredible compassion and initiative by organizing a successful fundraising campaign for a local charity. The students came together, brainstormed creative ideas, and executed various activities to raise funds for a cause close to their hearts. Lorem ipsum dolor sit ament. ',
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
