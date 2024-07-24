import React from 'react'
import styles from './styles.module.css'
import Card from '../../Card/Card'

const QuickPlannerCard = () => {
    return (
        <Card>
            <div className={styles.gasSavingsCardCont}>
                <div className={styles.categoryCont}>
                    <div className={styles.category}>
                        Gas Savings
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className={styles.model}>
                            Year
                        </div>
                        <div className={styles.trailingBtn}>
                            +
                        </div>
                    </div>
                </div>
                <div className={styles.statsCont}>
                    <div className={styles.stat}>
                        <div className={styles.statsUnit}>Saved money</div>
                        <div className={styles.statsValue}>
                            <div className={styles.unit}>$</div>
                            1,716
                        </div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statsUnit}>Using private</div>
                        <div className={styles.statsValue}>
                            <div className={styles.unit}>$</div>
                            259
                        </div>
                    </div>
                    <div className={styles.stat}>
                        <div className={styles.statsUnit}>m, not burned</div>
                        <div className={styles.statsValue}>
                            39
                            <div className={styles.unit}>O2</div>
                        </div>
                    </div>
                </div>

            </div>
        </Card>
    )
}

export default QuickPlannerCard