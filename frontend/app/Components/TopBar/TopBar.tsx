'use client';
import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';
import { infoIcon, moonIcon, notififcationIcon, searchIcon } from '@/app/Assets/Images/AssetsExports';

const TopBar = () => {
    return (
        <div className={styles.topBarCont}>
            <div className={styles.pageInfoCont}>
                <div className={styles.routePath}>Pages/Dashboard</div>
                <div className={styles.routeName}>Dashboard</div>
            </div>
            <div className={styles.actionsCont}>
                <div className={styles.searchBar}>
                    <Image className={styles.icon} src={searchIcon} alt={'Search Icon'} />
                    <input className={styles.searchInput} type={'text'} placeholder={'Search'} />
                </div>
                <Image className={styles.icon} src={notififcationIcon} alt={'Notification Icon'} />
                <Image className={styles.icon} src={moonIcon} alt={"Theme Icon"} />
                <Image className={styles.icon} src={infoIcon} alt={'Info Icon'} />
            </div>

        </div>
    )
}

export default TopBar