import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import SingleMessange from './SingleMessange'
import LoadingSpinner from '../UI/LoadingSpinner'

import { LoginDataType, MessangesListDataType } from '../helpers/types'
import styles from './MessangeList.module.css'

const MessangeList = () => {
	const loginInfoData = useSelector<any, LoginDataType>(state => state.loginData)
	const [messanges, setMessanges] = useState<MessangesListDataType>()

	useEffect(() => {
		if (loginInfoData.email !== '') {
			fetch('/api/messanges')
				.then(response => response.json())
				.then(data => {
					const personMessanges = data.messanges[loginInfoData.name]
					setMessanges(personMessanges)
				})
		}
	}, [loginInfoData])

	return (
		<div className={styles.container}>
			<h2 className={styles.header}>Messanges</h2>
			<ul className={styles.list}>
				{messanges !== undefined && messanges.length > 0 ? (
					messanges.map(data => (
						<SingleMessange name={data.caller} key={data._id} messageValues={data.content} img={data.img} />
					))
				) : (
					<LoadingSpinner loading={messanges === undefined} />
				)}
			</ul>
		</div>
	)
}

export default MessangeList
