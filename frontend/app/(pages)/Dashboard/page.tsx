import React from 'react'
import styles from './styles.module.css'
import ChargeStatsCard from '@/app/Components/Dashboard/ChargeStatsCard'
import EVCarsCard from '@/app/Components/Dashboard/EVCarsCard'
import StationsListCard from '@/app/Components/Dashboard/StationsListCard'
import GasSavingsCard from '@/app/Components/Dashboard/GasSavingsCard'
import QuickPlannerCard from '@/app/Components/Dashboard/QuickTripPlannerCard'
const Dashboard = () => {
    return (
        <div className={styles.dashboardCont}>
            <div className={styles.dashboard}>
                <div className={styles.section1}>
                    <div className={styles.primaryDataCont}>
                        <EVCarsCard />
                        <GasSavingsCard />
                    </div>
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