import React from 'react'
import styles from './styles.module.css'
import LocationCard from '@/app/Components/Stations/LocationCard';
import GasStationList from '@/app/Components/Stations/GasStationList';
import VehicleStatsCard from '@/app/Components/Stations/VehicleStats';

const Stations = () => {
    return (
        <div className={styles.stationsCont}>
            <div className={styles.stations}>
                <div className={styles.section1}>
                    <LocationCard />
                    <GasStationList />
                </div>
                <div className={styles.section2}>
                    <VehicleStatsCard />
                </div>
            </div>
        </div>
    )
}

export default Stations;