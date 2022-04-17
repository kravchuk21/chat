import React from 'react';
import styles from './Message.module.css'
import classNames from "classnames";

type MessageType = {
    message: string
    createdAt: Date
    isMe: boolean
}

export const Message: React.FC<MessageType> = ({message, createdAt, isMe}) => {
    return (
        <div className={classNames(styles.messageBlock, {[styles.me]: isMe})}>
            <div className={styles.message}>{message}</div>
            <span className={styles.time}>{createdAt.toDateString()}</span>
        </div>
    );
};

