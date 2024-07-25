'use client'
import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { mapBackgroundImg } from '@/app/Assets/Images/AssetsExports'

const QTPGraph = () => {
    return (
        <div className={styles.graphCont}>
            <div className={styles.imgCont}>
                <Image className={styles.graphBackground}
                    src={mapBackgroundImg} alt={'Map Background'} />
                <div className={styles.graphDataCont}>
                    <div className={styles.boardingCont}>
                        <div>
                            Tesla Model X
                        </div>
                        <div>
                            <div>Your Location</div>
                            <div>Home</div>
                        </div>
                    </div>

                    <div>
                        <div>TotalRange</div>
                        <div>325 miles</div>
                    </div>
                    <div>
                        You're all set. Drive safely!
                    </div>
                </div>
            </div>


        </div>
    )
}

export default QTPGraph