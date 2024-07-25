import React from 'react'
import styles from './styles.module.css'

const Filters = () => {

    const FilterTag = () => {
        return (
            <div className={styles.chartFilter}>
                <div className={styles.filterIcon} />
                <div className={styles.filterTxt}>Ev Hub -</div>
                <div className={styles.filterValue}>31%</div>
            </div>
        )
    }
    return (
        <div className={styles.chartFilterCont}>
            <FilterTag />
            <FilterTag />
            <FilterTag />
            <FilterTag />
            <FilterTag />
        </div>
    )
}

export default Filters