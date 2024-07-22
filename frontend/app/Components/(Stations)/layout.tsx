import React from 'react'
import styles from './styles.module.css'
import LocationCard from './LocationCard.tsx/LocationCard'

const Stations = () => {
    return (
        <div className={styles.stationsCont}>
            <div className={styles.stations}>
                <div className={styles.section1}>
                    <LocationCard />
                </div>
                <div className={styles.section2}></div>

            </div>
        </div>
    )
}

export default Stations;