import React from 'react';
import Image from "next/image";
import styles from './Logo.module.css'

const myLoader = () => {
    return "https://st.depositphotos.com/1008939/3281/i/600/depositphotos_32817757-stock-photo-smiling-man.jpg";
}

type LogoType = {
    classNames?: string
}

export const Logo: React.FC<LogoType> = ({classNames}) => {
    return (
        <div className={`${styles.logo} ${classNames}`}>
            <Image
                loader={myLoader}
                src={"https://st.depositphotos.com/1008939/3281/i/600/depositphotos_32817757-stock-photo-smiling-man.jpg"}
                alt={"В"}
                width={45}
                height={45}/>
        </div>
    );
};

