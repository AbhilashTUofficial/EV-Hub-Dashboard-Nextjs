'use client'
import React, { useEffect } from 'react'
import styles from '../styles.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { usePathname } from 'next/navigation'
import { accountIcon, dashboardIcon, locationIcon, mapIcon, scaleIcon } from '@/app/Assets/Images/AssetsExports'

type TabItemProps = {
    title: string;
    route: string;
    tabIndex: number;
    activeIcon: any;
    inactiveIcon: any
}

const navTabs = () => {
    const [tabIndex, setTabIndex] = React.useState(1)
    const pathname = usePathname();

    const Indicator = ({ tabIndex }: { tabIndex: number }) => {
        return (
            <div style={{ translate: `0 ${5 + (tabIndex * 65)}px` }} className={styles.indicatorVisible} />
        )
    }

    const TabItem: React.FC<TabItemProps> = ({ title, route, tabIndex, activeIcon, inactiveIcon }) => {
        return (
            <Link href={route} className={styles.tabCont} onClick={() => setTabIndex(tabIndex)}>
                {
                    pathname === route ? (
                        <>
                            <div className={styles.iconCont}>
                                <Image className={styles.activeIcon} src={activeIcon} alt='tab activeIcon' />
                            </div>
                            <div className={styles.activeTabTxt}>
                                {title}
                            </div>
                        </>
                    ) : (<>
                        <div className={styles.iconCont}>
                            <Image className={styles.inactiveIcon} src={inactiveIcon} alt='tab inActiveIcon' />
                        </div>
                        <div className={styles.inactiveTabTxt}>
                            {title}
                        </div>
                    </>)
                }

            </Link>
        )
    }

    return (
        <div className={styles.navTabsCont}>
            <div className={styles.tabs}>
                <TabItem title='Dashboard' route={'/Dashboard'} tabIndex={0} activeIcon={dashboardIcon.active} inactiveIcon={dashboardIcon.inactive} />
                <TabItem title='Stations' route={'/Stations'} tabIndex={1} activeIcon={locationIcon.active} inactiveIcon={locationIcon.inactive} />
                <TabItem title='My Trips' route={'/MyTrips'} tabIndex={2} activeIcon={mapIcon.active} inactiveIcon={mapIcon.inactive} />
                <TabItem title='Account' route={''} tabIndex={3} activeIcon={accountIcon.active} inactiveIcon={accountIcon.inactive} />
                <TabItem title='Subcription Plan' route={''} tabIndex={4} activeIcon={scaleIcon.active} inactiveIcon={scaleIcon.inactive} />
            </div>
            <Indicator tabIndex={tabIndex} />
        </div>
    )
}

export default navTabs