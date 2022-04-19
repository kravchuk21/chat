import React from 'react';
import styles from "./Button.module.css"


type ButtonType = {
    children:
        | JSX.Element
        | JSX.Element[]
        | string
        | string[]
    disabled?: boolean
    classNames?: string;
}

export const Button: React.FC<ButtonType> = ({children, disabled = false, classNames}) => {
    return (
        <button className={`${styles.button} ${classNames}`} disabled={disabled}>
            {children}
        </button>
    );
};

