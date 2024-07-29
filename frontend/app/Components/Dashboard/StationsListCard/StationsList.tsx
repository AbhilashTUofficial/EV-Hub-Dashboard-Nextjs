'use client'
import React, { use, useEffect } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { gasStationsImgs, thunderIcon } from '@/app/Assets/Images/AssetsExports'

type ListItem = {
    image: any;
    name: string;
    address: string;
    portsAvailable: number;
    parkingFee: number;
    perKwh: number;
    carStats: {
        model: {
            name: string;
            acdc: "AC/DC" | "DC" | "AC";
        };
        kW: number;
    }[]

}

const StationsList: React.FC<{}> = () => {

    const ListItem: React.FC<{ item: ListItem }> = ({ item }) => {

        return (
            <div className={styles.listItemCont}>
                <div className={styles.generalInfo}>
                    <div style={{ position: "relative" }}>
                        <Image className={styles.stationImg} src={item.image} alt={'Station Image'} />
                        <div className={styles.rattingTag}>4.5</div>
                    </div>
                    <div className={styles.verticalAlign}>
                        <div>
                            <div className={styles.txt1}>{item.name}</div>
                            <div className={styles.txt2}>{item.address}</div>
                        </div>
                        <div>
                            <div className={styles.txt2}>Ports Available</div>
                            <div className={styles.txt1}>{item.portsAvailable}</div>
                        </div>
                    </div>
                </div>
                <div className={styles.detaildInfo}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <div className={styles.carStats}>
                            <div style={{ position: "absolute", left: "5%" }} className={styles.txt1}>{item.carStats[0].model.name}</div>
                            <div style={{ position: "absolute", left: "28%" }} className={styles.txt1d}>{item.carStats[0].model.acdc}</div>
                            <div style={{ position: "absolute", left: "55%" }} className={styles.txt1}>{item.carStats[0].kW} kW</div>
                            <div style={{ position: "absolute", left: "84%" }} className={styles.activeIndicator} />
                        </div>
                        <div className={styles.carStats}>
                            <div style={{ position: "absolute", left: "5%" }} className={styles.txt1}>{item.carStats[1].model.name}</div>
                            <div style={{ position: "absolute", left: "28%" }} className={styles.txt1d}>{item.carStats[1].model.acdc}</div>
                            <div style={{ position: "absolute", left: "55%" }} className={styles.txt1}>{item.carStats[1].kW} kW</div>
                            <div style={{ position: "absolute", left: "84%" }} className={styles.activeIndicator} />
                        </div>

                    </div>
                    <div className={styles.timeingData}>
                        <div>
                            <div className={styles.txt2}>Parking Fee</div>
                            <div className={styles.txt1}>${item.parkingFee}</div>
                        </div>
                        <div>
                            <div className={styles.txt2}>Per kwh</div>
                            <div className={styles.txt1}>${item.perKwh}</div>
                        </div>
                    </div>
                    <div className={styles.timeingData}>
                        <div>
                            <div className={styles.txt2}>Arrive</div>
                            <div className={styles.txt1}>Today 09:15</div>
                        </div>
                        <div>
                            <div className={styles.txt2}>Depart</div>
                            <div className={styles.txt1}>Today 11:25</div>
                        </div>
                    </div>
                </div>


                <div className={styles.btnCont} >
                    <div className={styles.btn1}>Book</div>
                    <div className={styles.btn2}>Support</div>
                </div>

            </div >
        )
    }


    const data: ListItem[] = [
        {
            name: 'Station Name',
            address: 'Station Address',
            portsAvailable: 10,
            image: gasStationsImgs[0],
            perKwh: 0.1,
            parkingFee: 10,
            carStats: [
                {
                    model: {
                        name: 'Tesla',
                        acdc: "AC/DC"
                    },
                    kW: 100
                },
                {
                    model: {
                        name: 'Tesla',
                        acdc: "AC"
                    },
                    kW: 100
                },
            ]
        },
        {
            name: 'Station Name',
            address: 'Station Address',
            portsAvailable: 7,
            image: gasStationsImgs[1],
            perKwh: 0.1,
            parkingFee: 10,
            carStats: [
                {
                    model: {
                        name: 'Tesla',
                        acdc: "AC/DC"
                    },
                    kW: 100
                },
                {
                    model: {
                        name: 'Tesla',
                        acdc: "AC/DC"
                    },
                    kW: 100
                },
            ]
        }
    ]

    return (
        <div className={styles.stationsListCont}>
            {
                Array.from({ length: 6 }).map((_, index) => {
                    return (
                        <ListItem key={index} item={data[index % 2]} />
                    )
                })
            }

        </div>
    )
}

export default StationsList