'use client'
import React from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import { thunderIcon } from '@/app/Assets/Images/AssetsExports';

const BarGraph = () => {
    return (
        <div className={styles.graphCont}>
            <div className={styles.graphTitle}>
                <Image className={styles.unitIcon} src={thunderIcon} alt={'Graph Icon'} />
                <div>Charging</div>
            </div>
            <div className={styles.graph}>
                <div className={styles.graphBar} />
                <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <div className={styles.graphDataCont}>3:31
                        <div className={styles.unit}>h</div>
                    </div>
                    <div className={styles.graphText}>Remaining</div>
                </div>
            </div>
        </div>
    )
}

export default BarGraph