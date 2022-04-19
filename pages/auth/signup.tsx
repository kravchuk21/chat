import type {NextPage} from 'next'
import Head from 'next/head'
import {Input} from '../../components/Input'
import styles from '../../styles/Auth.module.css'
import {Button} from "../../components/Button";
import Link from 'next/link';


const SignUp: NextPage = () => {
    return (
        <div className={styles.auth}>
            <Head>
                <title>Регистрация</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <h1 className={styles.title}>Регистрация</h1>
            <div>
                <Input classNames={styles.input} placeholder="Ваше имя" />
                <Input classNames={styles.input} placeholder="E-mail" />
                <Input classNames={styles.input} placeholder="Пароль" />
            </div>
            <Button disabled={true}>Создать аккаунт</Button>
            <Link href="/auth/signin">
                <a className={styles.link}>Войти</a>
            </Link>
        </div>
    )
}

export default SignUp
