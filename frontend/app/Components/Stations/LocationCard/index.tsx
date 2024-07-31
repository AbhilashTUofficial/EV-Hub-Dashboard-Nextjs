'use client';
import React from 'react'
import styles from './styles.module.css'
import Card from '../../Card'
import Image from 'next/image';
import { locationIcon, mapBackgroundImgs } from '@/app/Assets/Images/AssetsExports';
const LocationCard = () => {
    return (
        <Card>
            <div className={styles.locationCardCont}>
                <div className={styles.header}>
                    <div className={styles.titleCont}>
                        <Image src={locationIcon.filled} className={styles.icon} alt={'Location Icon'} />
                        <div className={styles.title}>New York, United States of America</div>
                    </div>
                    <input className={styles.searchBar} placeholder='Search' />
                </div>
                <div className={styles.mapCont}>
                    <Image className={styles.map} src={mapBackgroundImgs[1]} alt={'Location Icon'} />
                </div>
            </div>
        </Card>
    )
}

export default LocationCard