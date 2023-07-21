import styles from './NewsList.module.css'
import SingleNews from './SingleNews'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { NewsListFetchedType } from '../helpers/types'

const NewsList = () => {
	const [newsList, setNewsList] = useState<NewsListFetchedType>()
	const router = useRouter()
	const whoIsLogged = router.pathname.includes('student') ? 'student' : 'teacher'

	useEffect(() => {
		fetch('/api/news')
			.then(response => response.json())
			.then(data => {
				setNewsList(data.news)
			})
	}, [])
	
	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Latest News</h2>
			<ul className={styles.list}>
				{newsList !== undefined && newsList.length > 0 ? (
					newsList.map(news => (
						<SingleNews
							author={news.author}
							date={news.date}
							description={news.description}
							title={news.title}
							img={news.img}
							key={news._id}
						/>
					))
				) : (
					<p>Loading...</p>
				)}
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
