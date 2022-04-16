import React from 'react';
import styles from './Header.module.css'
import {Logo} from "../Logo";

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Logo/>
            <h1 className={styles.title}>Чат</h1>
        </header>
    );
};

