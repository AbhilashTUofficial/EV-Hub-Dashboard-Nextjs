import React from 'react'
import styles from './styles.module.css'

type Props = {
    children: React.ReactNode;
    style?: React.CSSProperties

}

const Card: React.FC<Props> = ({ children, style }) => {
    return (
        <div style={style} className={styles.cardCont}>{children}</div>
    )
}

export default Card