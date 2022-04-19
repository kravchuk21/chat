import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../../styles/Dialog.module.css'
import {Header} from "../../components/Header";
import {Input} from '../../components/Input';
import {Message} from "../../components/Message";

const Dialog: NextPage = () => {
    return (
        <div className={styles.dialog}>
            <Head>
                <title>Диалог: Влад Кравчук</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Header/>
            <div className={styles.messages}>
                <Message
                    message={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                    createdAt={new Date()} isMe={false}/>
                <Message
                    message={"Чё?🤔"}
                    createdAt={new Date()} isMe={true}/>
            </div>
            <Input placeholder="Введите сообщение..."/>
        </div>
    )
}

export default Dialog
