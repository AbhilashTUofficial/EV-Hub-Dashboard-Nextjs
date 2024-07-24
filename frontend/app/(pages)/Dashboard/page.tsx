import React from 'react'
import styles from './styles.module.css'
import ChargeStatsCard from '@/app/Components/(Dashboard)/ChargeStatsCard/ChargeStatsCard'
import EVCarsCard from '@/app/Components/(Dashboard)/EVCarsCard/EVCarsCard'
import StationsListCard from '@/app/Components/(Dashboard)/StationsListCard/StationsListCard'
import TopBar from '@/app/Components/TopBar/TopBar'
import Footer from '@/app/Components/(Footer)/Footer'
import GasSavingsCard from '@/app/Components/(Dashboard)/GasSavingsCard/GasSavingsCard'
import QuickPlannerCard from '@/app/Components/(Dashboard)/QuickTripPlannerCard/QuickTripPlannerCard'
const Dashboard = () => {
    return (
        <div className={styles.dashboardCont}>
            <div className={styles.dashboard}>
                <div className={styles.section1}>
                    <EVCarsCard />
                    <GasSavingsCard />
                    <QuickPlannerCard />
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