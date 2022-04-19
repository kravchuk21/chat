import type {NextPage} from 'next'
import Head from 'next/head'
import {Input} from '../../components/Input'
import styles from '../../styles/Auth.module.css'
import {Button} from "../../components/Button";
import Link from 'next/link';


const SignIn: NextPage = () => {
    return (
        <div className={styles.auth}>
            <Head>
                <title>Войти</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1 className={styles.title}>Вход в аккаунт</h1>
            <div>
                <Input classNames={styles.input} placeholder="E-mail" />
                <Input classNames={styles.input} placeholder="Пароль" />
            </div>
            <Button>Войти</Button>
            <Link href="/auth/signup">
                <a className={styles.link}>Зарегестрироваться</a>
            </Link>
        </div>
    )
}

export default SignIn
