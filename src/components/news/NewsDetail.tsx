import styles from './NewsDetail.module.css'
import Image from 'next/image'
import Router from 'next/router'

const singleNews = {
	title: 'Student Initiative Raises Funds for Local Charity',
	date: '01-06-2023',
	id: 'news3',
	author: 'Mikołaj Kopernik',
	text: 'Students at Mapleville Middle School showcased their incredible compassion and initiative by organizing a successful fundraising campaign for a local charity. The students came together, brainstormed creative ideas, and executed various activities to raise funds for a cause close to their hearts. Lorem ipsum dolor sit ament. ',
	description:
		'Students at Mapleville Middle School showcased their incredible compassion and initiative by organizing a successful fundraising campaign for a local charity. The students came together, brainstormed creative ideas, and executed various activities to raise funds for a cause close to their hearts. Lorem ipsum dolor sit ament. Students at Mapleville Middle School showcased their incredible compassion and initiative by organizing a successful fundraising campaign for a local charity. The students came together, brainstormed creative ideas, and executed various activities to raise funds for a cause close to their hearts. Lorem ipsum dolor sit ament. Students at Mapleville Middle School showcased their incredible compassion and initiative by organizing a successful fundraising campaign for a local charity. The students came together, brainstormed creative ideas, and executed various activities to raise funds for a cause close to their hearts. Lorem ipsum dolor sit ament. Students at Mapleville Middle School showcased their incredible compassion and initiative by organizing a successful fundraising campaign for a local charity. The students came together, brainstormed creative ideas, and executed various activities to raise funds for a cause close to their hearts.',
}

const NewsDetail = () => {
	const backPath = Router.pathname.includes('student') ? '/student/news' : 'teacher/news'

	return (
		<div className={styles.container}>
			<h2 className={styles.title}>{singleNews.title}</h2>
			<div className={styles.box}>
				<Image
					src={`/photos/news/${singleNews.id}.jpg`}
					alt={singleNews.title}
					width='500'
					height='500'
					className={styles.img}
				/>
				<div className={styles.content}>
					<p className={styles.description}>{singleNews.description}</p>
					<div className={styles.moreInfo}>
						<span className={styles.info}>{singleNews.date}</span>
						<span className={styles.info}>{singleNews.author}</span>
					</div>
				</div>
			</div>
			<button
				aria-label='Click to go back to news list'
				className={styles.button}
				onClick={() => {
					Router.push(backPath)
				}}>
				<Image src='/icons/arrowLeft.png' alt='' width='65' height='40' />
				<span>Go back</span>
			</button>
		</div>
	)
}

export default NewsDetail
