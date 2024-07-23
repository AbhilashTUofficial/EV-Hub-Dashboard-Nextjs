import React from 'react'
import styles from './styles.module.css'
import PlanRouteCard from '@/app/Components/MyTrips/PlanRouteCard/PlanRouteCard'
import UploadCard from '@/app/Components/MyTrips/UploadCard/UploadCard'

const Dashboard = () => {
    return (
        <div className={styles.myTripsCont}>
            <div className={styles.myTrips}>
                <PlanRouteCard />
                <UploadCard />
            </div>
        </div>
    )
}

export default Dashboard