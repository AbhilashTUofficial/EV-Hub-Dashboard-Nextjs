import React from 'react'
import MyCarCar from './MyCarCar'
import styles from '../styles.module.css'
const MyCarsList = () => {
    return (
        <div className={styles.myCarsListCont}>
            {
                [1, 2].map((item) => <MyCarCar key={item} />)
            }
        </div>
    )
}

export default MyCarsList