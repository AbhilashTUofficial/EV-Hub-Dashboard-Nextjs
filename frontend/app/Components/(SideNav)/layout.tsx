'use client'

import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { Logo } from '@/app/Assets/Images/AssetsExports'
import NavTabs from './NavTabs/navTabs'
import MyCarsList from './MyCars/MyCarsList'
const SideNav = () => {
    return (
        <div className={styles.sideNavCont}>
            <div className={styles.header}>
                <Image className={styles.logo} src={Logo} alt='logo' />
                <div className={styles.title}>
                    <span className={styles.ev}>EV</span>
                    <span className={styles.hub}>HUB</span>
                </div>
            </div>
            <NavTabs />
            {/* <MyCarsList /> */}
        </div>
    )
}

export default SideNav