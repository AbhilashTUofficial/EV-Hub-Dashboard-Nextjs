import React from 'react'
import styles from './styles.module.css'
import TopBar from './TopBar/TopBar'
import EVCarsCard from './EVCarsCard/EVCarsCard'
import ChargeStatsCard from './ChargeStatsCard/ChargeStatsCard'
import StationsListCard from './StationsListCard/StationsListCard'
import Footer from '../(Footer)/Footer'
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
            <Footer />

        </div>
    )
}

export default Dashboard