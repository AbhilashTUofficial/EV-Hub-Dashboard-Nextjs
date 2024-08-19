'use client';
import React from 'react'
import Card from '../../Card'
import styles from './styles.module.css'
import Image from 'next/image'
import { locationIcon } from '@/app/Assets/Images/AssetsExports'

const PlanRouteCard = () => {
    const MapView = () => {
        return (
            <div className={styles.mapView}>
                <div className={styles.mapActions}>
                    <div className={styles.primaryBtns}>
                        <div className={styles.yourLocCont}>
                            <span>Your Location</span>
                            <span>
                                <Image src={locationIcon.active} alt='your location' />
                            </span>
                        </div>

                        <div className={styles.destLocCont}>
                            <span>Destination</span>
                            <span>
                                <Image src={locationIcon.inactive} alt='Destination location' />
                            </span>
                        </div>
                    </div>

                    <div className={styles.secondaryBtns}>
                        <div className={styles.getDirectionsCont}>
                            <span>Get Directions</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const RouteView = () => {
        return (
            <div className={styles.routeView}>

            </div>
        )
    }
    return (
        <Card>
            <div className={styles.planRouteCardCont}>
                <div className={styles.header}>
                    <div>Plan a route</div>
                    <div className={styles.trailingBtns}>
                        <div className={styles.btn}>Month</div>
                        <div className={styles.btn}>+</div>
                    </div>
                </div>
                <div className={styles.body}>
                    <MapView />
                    <RouteView />
                </div>
            </div>
        </Card>
    )
}

export default PlanRouteCard