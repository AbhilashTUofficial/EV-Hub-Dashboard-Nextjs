import React from 'react'
import GasStationCard from './GasStationCard'
import styles from './styles.module.css'

const GasStationsList = () => {
    return (
        <div className={styles.gasStationsListCont}>
            <GasStationCard />
            <GasStationCard />
            <GasStationCard />

        </div>
    )
}

export default GasStationsList