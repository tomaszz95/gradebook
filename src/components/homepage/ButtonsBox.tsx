import Image from 'next/image'
import styles from './ButtonsBox.module.css'

type ComponentType = {
    onChangeUserHandler: (user: string) => void
    chosenUser: string
}

const ButtonBox: React.FC<ComponentType> = ({ onChangeUserHandler, chosenUser }) => {
    return (
        <div className={styles.buttonsBox}>
            <button
                type="button"
                aria-label="Change to student"
                onClick={() => onChangeUserHandler('student')}
                className={chosenUser === 'student' ? styles.active : ''}
            >
                <Image src="/icons/bookicon.png" alt="" width="240" height="240" priority={true} />
                <span>Student</span>
            </button>
            <button
                type="button"
                aria-label="Change to teacher"
                onClick={() => onChangeUserHandler('teacher')}
                className={chosenUser === 'teacher' ? styles.active : ''}
            >
                <Image src="/icons/studenticon.png" alt="" width="240" height="240" priority={true} />
                <span>Teacher</span>
            </button>
        </div>
    )
}

export default ButtonBox
