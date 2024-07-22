import React from 'react'
import styles from './styles.module.css'

type Props = {
    children: React.ReactNode;
}

const Card: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.cardCont}>{children}</div>
    )
}

export default Card