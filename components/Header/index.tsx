import React from 'react';
import styles from './Header.module.css'
import {Logo} from "../Logo";
import Link from 'next/link';

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Link href="/profile">
                <a title="Настройки профиля">
                    <Logo/>
                </a>
            </Link>
            <h1 className={styles.title}>Чат</h1>
        </header>
    );
};

