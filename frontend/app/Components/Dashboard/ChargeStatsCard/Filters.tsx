'use client'
import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { caseIcon, moreIcon, thunderIcon2, turnIcon } from '@/app/Assets/Images/AssetsExports'

type FilterTagProps = {
    icon: any
}
const Filters = () => {
    const FilterTag: React.FC<FilterTagProps> = ({ icon }) => {
        const [active, setActive] = React.useState(false);
        return (
            <div onClick={() => setActive(!active)} className={styles.chartFilter}>
                <Image className={styles.filterIcon} src={active ? icon.active : icon.inactive} alt={'Filter Icon'} />
                <div className={styles.filterTxt}>Ev Hub -</div>
                <div className={styles.filterValue}>31%</div>
            </div>
        )
    }
    return (
        <div className={styles.chartFilterCont}>
            <FilterTag icon={thunderIcon2} />
            <FilterTag icon={caseIcon} />
            <FilterTag icon={thunderIcon2} />
            <FilterTag icon={turnIcon} />
            <FilterTag icon={moreIcon} />
        </div>
    )
}

export default Filters