import React from 'react'
import styles from './styles.module.css'
import Card from '../../Card'
import QTPGraph from './QTPGraph'

const QuickPlannerCard = () => {
    return (
        <Card>
            <div className={styles.qtpCont}>

                <div className={styles.headerCont}>
                    <div className={styles.title}>
                        Quick Trip Planer
                    </div>
                    <div className={styles.trailingBtn}>
                        +
                    </div>
                </div>
                <QTPGraph />
            </div>
        </Card>
    )
}

export default QuickPlannerCard