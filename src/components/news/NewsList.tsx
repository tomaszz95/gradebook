import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

import SingleNews from './SingleNews'
import LoadingSpinner from '../UI/LoadingSpinner'

import styles from './NewsList.module.css'
import { LoginDataType, NewsListFetchedType } from '../helpers/types'

const NewsList = () => {
	const router = useRouter()
	const loginInfoData = useSelector<any, LoginDataType>(state => state.loginData)
	const [newsList, setNewsList] = useState<NewsListFetchedType>()

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
							text={news.text}
							img={news.img}
							_id={news._id}
							key={news._id}
							role={loginInfoData.role}
						/>
					))
				) : (
					<LoadingSpinner loading={newsList === undefined} />
				)}
			</ul>
			{loginInfoData.role === 'teacher' && newsList !== undefined && newsList.length > 0 ? (
				<button onClick={() => router.push(`/${loginInfoData.role}/news/create-news`)} className={styles.newButton}>
					Add new news
				</button>
			) : null}
		</div>
	)
}

export default NewsList
