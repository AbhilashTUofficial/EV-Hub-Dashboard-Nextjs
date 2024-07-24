'use client'
import React from 'react'
import styles from './styles.module.css';
import Image from 'next/image';
import { thunderIcon } from '@/app/Assets/Images/AssetsExports';

const BarGraph1 = () => {
    return (
        <div className={styles.graphCont}>
            <div className={styles.graph}>
                {
                    Array.from({ length: 10 }, (_, index) => (
                        <div className={`${index < 7 && styles.graphSlab1} ${styles.graphSlab}`} key={index} />
                    ))
                }

            </div>
            <div className={styles.graphTitle}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className={styles.caActive}>CA$32</div>
                    <Image className={styles.unitIcon} src={thunderIcon} alt={'Graph Icon'} />
                </div>
                <div className={styles.statsUnit}>Total spent</div>
            </div>

        </div>
    )
}

export default BarGraph1