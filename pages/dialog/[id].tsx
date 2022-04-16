import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../../styles/Dialog.module.css'
import {Header} from "../../components/Header";
import {Input} from '../../components/Input';

const Dialog: NextPage = () => {
    return (
        <div className={styles.dialog}>
            <Head>
                <title>Дмалог: Влад Кравчук</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <div className={styles.messages}>
                <div className={styles.messageBlock}>
                    <div className={styles.message}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque esse id laborum magni nesciunt
                        possimus sapiente! Doloremque excepturi id ipsa, laborum modi mollitia odio optio quo,
                        repudiandae
                        sed sequi tenetur?
                    </div>
                    <span className={styles.time}>17:02</span>
                </div>
                <div className={`${styles.me} ${styles.messageBlock}`}>
                    <div className={styles.message}>Hello</div>
                    <span className={styles.time}>17:07</span>
                </div>
            </div>
            <Input placeholder="Введите сообщение..."/>
        </div>
    )
}

export default Dialog
