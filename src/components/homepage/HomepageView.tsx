import { useState } from 'react'
import LoginForm from './LoginForm'

import styles from './HomepageView.module.css'
import ButtonBox from './ButtonsBox'

const HomepageView = () => {
    const [chosenUser, setChosenUser] = useState('student')

    const changeUserHandler = (user: string) => {
        if (chosenUser === user) return

        if (chosenUser === 'student') {
            setChosenUser('teacher')
        } else {
            setChosenUser('student')
        }
    }

    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Welcome to Gradebook!</h1>
            <div className={styles.card}>
                <ButtonBox onChangeUserHandler={changeUserHandler} chosenUser={chosenUser} />
                <LoginForm user={chosenUser} />
            </div>
        </main>
    )
}

export default HomepageView
