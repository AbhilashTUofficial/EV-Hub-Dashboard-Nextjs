import React from 'react'
import styles from './styles.module.css'
import ChargeStatsCard from '@/app/Components/(Dashboard)/ChargeStatsCard/ChargeStatsCard'
import EVCarsCard from '@/app/Components/(Dashboard)/EVCarsCard/EVCarsCard'
import StationsListCard from '@/app/Components/(Dashboard)/StationsListCard/StationsListCard'
import TopBar from '@/app/Components/TopBar/TopBar'
import Footer from '@/app/Components/(Footer)/Footer'
const Dashboard = () => {
    return (
        <div className={styles.dashboardCont}>
            <TopBar />
            <div className={styles.dashboard}>
                <div className={styles.section1}>
                    <EVCarsCard />
                    <EVCarsCard />
                    <EVCarsCard />
                </div>
                <div className={styles.section2}>
                    <ChargeStatsCard />
                    <StationsListCard />
                </div>
            </div>
        </div>
    )
}

export default Dashboard