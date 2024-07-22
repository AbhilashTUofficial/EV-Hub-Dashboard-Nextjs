import React from 'react'
import styles from '../styles.module.css'
const TopBar = () => {
    return (
        <div className={styles.topBarCont}>
            <div className={styles.pageInfoCont}>
                <div className={styles.routePath}>Pages/Dashboard</div>
                <div className={styles.routeName}>Dashboard</div>
            </div>
            <div className={styles.actionsCont}>

            </div>

        </div>
    )
}

export default TopBar