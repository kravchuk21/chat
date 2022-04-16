import React from 'react';
import styles from './Dialog.module.css'
import {Logo} from "../Logo";

export const Dialog: React.FC = () => {
    return (
        <div className={styles.dialog}>
            <Logo classNames={styles.logo}/>
            <h4 className={styles.fullName}>Dlav Кравчук</h4>
            <p className={styles.message}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                cumque dolorem earum explicabo incidunt nisi nostrum, pariatur, reiciendis reprehenderit
                unde vel, vitae voluptatum. Id molestiae, optio placeat praesentium recusandae rerum.</p>
            <div className={styles.status}/>
        </div>
    );
};

