'use client'
import React from 'react'
import styles from './styles.module.css'
import Card from '../../Card'
import Image from 'next/image'
import Chart from './Chart'
import Filters from './Filters'
type SegmentData = {
    segmentName: string
    values: number[]
    segmentColor: string
}
const ChargeStatsCard = () => {
    const data: { segmentation: SegmentData[] } = {
        segmentation: [
            {
                segmentName: 'segment 1',
                values: Array.from({ length: 24 }, () => Math.floor(Math.random() * 200) + 50),
                segmentColor: 'red'
            },
            {
                segmentName: 'segment 2',
                values: Array.from({ length: 24 }, () => Math.floor(Math.random() * 200) + 50),
                segmentColor: 'yellow'

            },
            {
                segmentName: 'segment 3',
                values: Array.from({ length: 24 }, () => Math.floor(Math.random() * 200) + 50),
                segmentColor: "var(--primaryColor)"

            }
        ]
    }
    const [visibleGraph, setVisibleGraph] = React.useState<"all" | "day" | "week" | "month" | "year">("all")
    return (
        <Card>
            <div className={styles.chargeStatsCardCont}>
                <div className={styles.header}>
                    <div className={styles.title}>Charge statitics</div>
                    <div className={styles.trailingBtn}>
                        <div>Month</div>
                        +
                        {/* <Image src={chevronIcon} alt={'Chevron Icon'}/> */}
                    </div>
                </div>
                <div className={styles.fields}>
                    <div className={styles.field}>
                        <div className={styles.fieldTitle}>Total spent</div>
                        <div className={styles.fieldValue}>$ 87</div>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.fieldTitle}>Total charged</div>
                        <div className={styles.fieldValue}>324 kWh</div>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.fieldTitle}>Total time</div>
                        <div className={styles.fieldValue}>52 hr</div>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.fieldTitle}>Visited  stations</div>
                        <div className={styles.fieldValue}>43</div>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.fieldTitle}>Parking time</div>
                        <div className={styles.fieldValue}>11 hr</div>
                    </div>
                    <div className={styles.field}>
                        <div className={styles.fieldTitle}>Cycle Count</div>
                        <div className={styles.fieldValue}>651</div>
                    </div>
                </div>
                <Chart data={data} visibleGraph={visibleGraph} />
                <Filters />

            </div>
        </Card>
    )
}

export default ChargeStatsCard