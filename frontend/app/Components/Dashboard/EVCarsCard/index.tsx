import React from 'react'
import styles from './styles.module.css'
import Card from '../../Card'
import BarGraph from './BarGraph'
const EVCarsCard = () => {
    return (
        <Card>
            <div className={styles.evCarsCardCont}>
                <div className={styles.categoryCont}>
                    <div className={styles.category}>
                        EV cars
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className={styles.model}>
                            Nissan Leaf
                        </div>
                        <div className={styles.name}>
                            Tesla X
                        </div>
                        <div className={styles.trailingBtn}>
                            +
                        </div>
                    </div>
                </div>
                <div className={styles.statsCont}>
                    <div className={styles.stat}>
                        <div className={styles.statsUnit}>Time</div>
                        <div className={styles.statsValue}>5:21
                            <div className={styles.unit}>h</div>
                        </div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statsUnit}>Battery</div>
                        <div className={styles.statsValue}>88
                            <div className={styles.unit}>%</div>
                        </div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statsUnit}>Power reserve</div>
                        <div className={styles.statsValue}>428
                            <div className={styles.unit}>km</div>
                        </div>
                    </div>
                </div>
                <BarGraph />
            </div>
        </Card>
    )
}

export default EVCarsCard