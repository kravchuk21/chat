import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {Header} from "../components/Header";
import {Dialog} from "../components/Dialog";
import {Input} from "../components/Input";


const Home: NextPage = () => {
    return (
        <div className={styles.home}>
            <Head>
                <title>Чат</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <Header/>
            <Input classNames={styles.search} placeholder="Найти пользователя..." />
            <div className={styles.dialogs}>
                <Dialog/>
                <Dialog/>
                <Dialog/>
            </div>
        </div>
    )
}

export default Home
