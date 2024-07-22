'use client'
import React from 'react'
import styles from '../styles.module.css'
import Image from 'next/image'
import { dashboardIcon } from '@/app/Assets/Images/AssetsExports'

const navTabs = () => {

    const TabItem = ({ title }) => {
        return (
            <div className={styles.tabCont}>
                <div className={styles.iconCont}>
                    <Image className={styles.icon} src={dashboardIcon} alt='tab icon' />
                </div>
                <div className={styles.tabTxt}>
                    {title}
                </div>
            </div>
        )
    }

    return (
        <div className={styles.navTabsCont}>
            <TabItem title='Dashboard' />
            <TabItem title='Stations' />
            <TabItem title='My Trips' />
            <TabItem title='Account' />
            <TabItem title='Subcription Plan' />


        </div>
    )
}

export default navTabs