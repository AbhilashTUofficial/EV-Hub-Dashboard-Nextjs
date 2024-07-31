'use client';
import React from 'react'
import Card from '../../Card'
import styles from './styles.module.css'
import Image from 'next/image'
import { gasStationIcon, moreIcon, turnIcon } from '@/app/Assets/Images/AssetsExports';

type Props = {
}

const GasStationCard: React.FC<Props> = () => {
    return (
        <Card style={{ flex: 1, maxWidth: '440px' }}>
            <div className={styles.gasStationCardCont}>
                <div className={styles.header}>
                    <Image className={styles.gasStationIcon} src={gasStationIcon} alt='gas station icon' />
                    <Image className={styles.moreBtn} src={moreIcon.active} alt='more btn' />
                </div>
                <div className={styles.locationCont}>
                    <div className={styles.distance}>
                        <div>1.5</div>
                        <div style={{ color: 'var(--lightGrayColor)', fontSize: '1.2rem' }}>miles</div>
                    </div>
                    <div className={styles.directionCont}>
                        <Image className={styles.directionIcon} src={turnIcon.active} alt='direction icon' />
                    </div>
                </div>
                <div className={styles.stationName}>Tesla Station</div>
                <div className={styles.stationData}>
                    <div className={styles.dataCont}>
                        <div className={styles.dataName}>Type</div>
                        <div className={styles.dataValue}>DC</div>
                    </div>
                    <div className={styles.dataCont}>
                        <div className={styles.dataName}>Price</div>
                        <div className={styles.dataValue}>
                            <div>$0.6</div>
                            <div style={{ color: 'var(--lightGrayColor)', fontSize: '1rem' }}> kW</div>
                        </div>
                    </div>
                    <div className={styles.dataCont}>
                        <div className={styles.dataName}>Slot</div>
                        <div className={styles.dataValue}>5</div>
                    </div>
                </div>

            </div>
        </Card>
    )
}

export default GasStationCard