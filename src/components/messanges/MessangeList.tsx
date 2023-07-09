import styles from './MessangeList.module.css'
import SingleMessange from './SingleMessange'

const dummyArr = [
	{
		caller: 'Nowak Anna',
		id: 'mes1',
		content: [
			{
				author: 'Nowak Anna',
				date: '22-06-2023',
				content: 'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament',
			},
			{
				author: 'Jacek Kowalski',
				date: '23-06-2023',
				content: 'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament',
			},
			{
				author: 'Nowak Anna',
				date: '26-06-2023',
				content:
					'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament',
			},
		],
	},
	{
		caller: 'Zbigniew Wesołowski',
		id: 'mes2',
		content: [
			{
				author: 'Jacek Kowalski',
				date: '23-05-2023',
				content:
					'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit',
			},
			{
				author: 'Zbigniew Wesołowski',
				date: '25-05-2023',
				content: 'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit',
			},
			{
				author: 'Jacek Kowalski',
				date: '27-05-2023',
				content:
					'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament',
			},
			{
				author: 'Zbigniew Wesołowski',
				date: '29-05-2023',
				content:
					'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit',
			},
		],
	},
	{
		caller: 'Magdalena Wiśniewska',
		id: 'mes3', 
		content: [
			{
				author: 'Magdalena Wiśniewska',
				date: '17-06-2023',
				content: 'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament',
			},
			{
				author: 'Magdalena Wiśniewska',
				date: '17-06-2023',
				content:
					'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament',
			},
		],
	},
	{
		caller: 'Miłosz Janek',
		id: 'mes4',
		content: [
			{
				author: 'Miłosz Janek',
				date: '05-04-2023',
				content: 'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament',
			},
			{
				author: 'Miłosz Janek',
				date: '08-04-2023',
				content: 'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit',
			},
			{
				author: 'Jacek Kowalski',
				date: '10-04-2023',
				content:
					'Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament, Lorem ipsum dolor sit ament sd sd sd sd sd',
			},
		],
	},
]

const MessangeList = () => {
	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Messanges</h2>
			<ul className={styles.list}>
				{dummyArr.map(data => (
					<SingleMessange name={data.caller} id={data.id} key={data.id} messageValues={data.content}/>
				))}
			</ul>
		</div>
	)
}

export default MessangeList
