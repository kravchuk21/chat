import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Profile.module.css'

const Profile: NextPage = () => {
    return (
        <div className={styles.profile}>
            <Head>
                <title>Профиль</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1>Профиль</h1>
        </div>
    )
}

export default Profile
