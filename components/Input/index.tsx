import React from 'react';
import styles from './Input.module.css';

type InputType = {
    type?: "text" | "password"
    placeholder?: string
    classNames?: string
}

export const Input: React.FC<InputType> = ({type = "text", placeholder, classNames}) => {
    return (
        <input className={`${styles.input} ${classNames}`} type={type} placeholder={placeholder}/>
    );
};

