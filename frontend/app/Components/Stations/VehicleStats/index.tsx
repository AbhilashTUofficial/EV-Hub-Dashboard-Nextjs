'use client'
import React from 'react'
import Card from '../../Card'
import styles from './styles.module.css'
import Image from 'next/image'
import { carImage, mapBackgroundImg, mapBackgroundImgs, moreIcon, thunderIcon, turnIcon } from '@/app/Assets/Images/AssetsExports'
const VehicleStatsCard = () => {
    return (
        <Card>
            <div className={styles.vehicleStatsCardCont}>
                <div className={styles.header}>
                    <div className={styles.title}>Vehicle Stats</div>
                    <Image className={styles.moreIcon} src={moreIcon.active} alt='more icon' />
                </div>
                <Image src={carImage} alt='car image' className={styles.carImage} />
                <div className={styles.vehicleStatsCont}>
                    <div>
                        <div className={styles.key}>EV</div>
                        <div className={styles.value}>Tesla</div>
                    </div>
                    <div>
                        <div className={styles.key}>Battery</div>
                        <div style={{ color: 'var(--primaryColor)' }} className={styles.value}>80%</div>
                    </div>
                    <div>
                        <div className={styles.key}>Range</div>
                        <div className={styles.value}>340 <span className={styles.unit}>miles</span></div>
                    </div>
                    <div>
                        <div className={styles.key}>Temp</div>
                        <div className={styles.value}>75.2°F</div>
                    </div>
                </div>
                <div className={styles.moreVehicleStats}>
                    <div className={styles.batteryStats}>
                        <div>
                            <div className={styles.key}>
                                Battery Status
                            </div>
                            <div style={{ color: 'var(--primaryColor)' }} className={styles.value}>
                                <span style={{ marginRight: '0.2rem', justifyContent: 'center' }}>
                                    <Image className={styles.unitIcon} src={thunderIcon} alt={'thunder icon'} />
                                </span>
                                Good
                            </div>
                        </div>
                        <div>
                            <div className={styles.key}>
                                Time Left
                            </div>
                            <div className={styles.value}>
                                5:21<span className={styles.unit}>h</span>
                            </div>
                        </div>
                        <div>
                            <div className={styles.key}>
                                Model
                            </div>
                            <div className={styles.value}>
                                Tesla X
                            </div>
                        </div>
                        <div>
                            <div className={styles.key}>
                                Activity Time
                            </div>
                            <div className={styles.value}>
                                1:24<span className={styles.unit}> h</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.locationStats}>
                        <div>
                            <div className={styles.key}>
                                Nearby Station
                            </div>
                            <div className={styles.value}>
                                Tesla Station
                            </div>
                        </div>
                        <div>

                            <div style={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex' }} className={styles.value}>
                                <span>
                                    1.5 <span className={styles.unit}>mi</span>
                                </span>
                                <span style={{
                                    marginLeft: '0.5rem',
                                    backgroundColor: 'var(--primaryColor)',
                                    borderRadius: '0.2rem', padding: '0.2rem',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    display: 'flex'
                                }} className={styles.unitIcon}>
                                    <Image style={{ height: '0.8rem', width: '0.8rem' }} className={styles.unitIcon} src={turnIcon.inactive} alt={'thunder icon'} />
                                </span>
                            </div>
                        </div>
                        <Image className={styles.mapImage} src={mapBackgroundImgs[0]} alt='map image' />
                    </div>

                </div>
                <div className={styles.avgEngCont}>
                    <div className={styles.header}>
                        <div className={styles.key}>
                            Avg Energy
                        </div>
                        <Image className={styles.moreIcon} src={moreIcon.active} alt='more icon' />
                    </div>

                    <div className={styles.value}>
                        67 <span className={styles.unit}> kW</span>
                    </div>
                </div>
            </div>

        </Card>
    )
}

export default VehicleStatsCard