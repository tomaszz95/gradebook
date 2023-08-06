import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import SingleMessage from './SingleMessage'
import LoadingSpinner from '../UI/LoadingSpinner'

import { LoginDataType, MessagesListDataType } from '../helpers/types'
import styles from './MessageList.module.css'

const MessageList = () => {
	const loginInfoData = useSelector<any, LoginDataType>(state => state.loginData)
	const [messages, setMessages] = useState<MessagesListDataType>()

	useEffect(() => {
		if (loginInfoData.email !== '') {
			fetch('/api/messages')
				.then(response => response.json())
				.then(data => {
					const personMessages = data.messages[loginInfoData.name]
					setMessages(personMessages)
				})
		}
	}, [loginInfoData])

	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Messages</h2>
			<ul className={styles.list}>
				{messages !== undefined && messages.length > 0 ? (
					messages.map(data => (
						<SingleMessage name={data.caller} key={data._id} messageValues={data.content} img={data.img} />
					))
				) : (
					<LoadingSpinner loading={messages === undefined} />
				)}
			</ul>
		</div>
	)
}

export default MessageList
