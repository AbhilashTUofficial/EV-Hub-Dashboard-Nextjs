'use client'
import React, { useEffect } from 'react'
import styles from '../styles.module.css'
import Image from 'next/image'
import { dashboardIcon } from '@/app/Assets/Images/AssetsExports'
import Link from 'next/link'
import { useRouter } from 'next/router'

type TabItemProps = {
    title: string;
    route: string;
    tabIndex: number;
}

const navTabs = () => {
    const [tabIndex, setTabIndex] = React.useState(1)

    const Indicator = ({ tabIndex }: { tabIndex: number }) => {
        return (
            <div style={{ translate: `0 ${5 + (tabIndex * 65)}px` }} className={styles.indicatorVisible} />
        )
    }

    const TabItem: React.FC<TabItemProps> = ({ title, route, tabIndex }) => {
        return (
            <Link href={route} className={styles.tabCont} onClick={() => setTabIndex(tabIndex)}>
                <div className={styles.iconCont}>
                    <Image className={styles.icon} src={dashboardIcon} alt='tab icon' />
                </div>
                <div className={styles.tabTxt}>
                    {title}
                </div>
            </Link>
        )
    }

    return (
        <div className={styles.navTabsCont}>
            <div className={styles.tabs}>
                <TabItem title='Dashboard' route={'/Dashboard'} tabIndex={0} />
                <TabItem title='Stations' route={'/Stations'} tabIndex={1} />
                <TabItem title='My Trips' route={'/MyTrips'} tabIndex={2} />
                <TabItem title='Account' route={''} tabIndex={3} />
                <TabItem title='Subcription Plan' route={''} tabIndex={4} />
            </div>
            <Indicator tabIndex={tabIndex} />
        </div>
    )
}

export default navTabs