'use client'
import React from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import { fireGrayIcon } from '@/app/Assets/Images/AssetsExports';

const BarGraph2 = () => {
    return (
        <div className={styles.graphCont}>
            <div className={styles.graph}>
                {
                    Array.from({ length: 10 }, (_, index) => (
                        <div className={`${styles.graphSlab2} ${styles.graphSlab}`} key={index} />
                    ))
                }

            </div>
            <div style={{ color: 'var(--lightGrayColor)' }} className={styles.graphTitle}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>CA$253</div>
                    <Image className={styles.unitIcon} src={fireGrayIcon} alt={'Graph Icon'} />
                </div>
                <div className={styles.statsUnit}>gas Equal.</div>

            </div>
        </div>
    )
}

export default BarGraph2