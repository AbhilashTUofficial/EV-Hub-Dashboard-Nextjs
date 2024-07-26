import React from 'react'
import styles from './styles.module.css'
import Card from '../../Card';
import StationsList from './StationsList';
const StationsListCard = () => {
    return (
        <Card>
            <div className={styles.stationsListCardCont}>
                <div className={styles.headerCont}>
                    <div className={styles.category}>
                        Stations List
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className={styles.favorite}>
                            Favorite
                        </div>
                        <div className={styles.all}>
                            All
                        </div>
                    </div>
                </div>
                <StationsList />
            </div>
        </Card>
    )
}

export default StationsListCard;