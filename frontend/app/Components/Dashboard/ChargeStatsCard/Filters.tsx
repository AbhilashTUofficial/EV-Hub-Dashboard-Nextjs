'use client'
import React, { useEffect } from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { caseIcon, moreIcon, thunderIcon2, turnIcon } from '@/app/Assets/Images/AssetsExports'

type FilterProps = {
    data: any
    setSelectedSegments: any
    selectedSegments: any
}

type FilterTagProps = {
    icon: any,
    data: any
}
const Filters: React.FC<FilterProps> = ({ data, setSelectedSegments, selectedSegments }) => {
    const FilterTag: React.FC<FilterTagProps> = ({ icon, data }) => {
        const [active, setActive] = React.useState(false);



        const handleClick = (currentData) => {

            if (selectedSegments.filter((segment: any) => segment.segmentName == currentData.segmentName).length > 0) {

                setSelectedSegments(selectedSegments.filter((segment: any) => segment.segmentName != currentData.segmentName))
            } else {
                var prevData = selectedSegments.filter((segment: any) => segment.segmentName != currentData.segmentName);
                var newData = [currentData]
                prevData.forEach(seg => {
                    newData.push(seg);
                });
                setSelectedSegments(newData.reverse())
            }

        }

        return (
            <div onClick={() => handleClick(data)} className={styles.chartFilter}>
                <Image style={{ backgroundColor: data.segmentColor }}
                    className={styles.filterIcon} src={active ? icon.active : icon.inactive} alt={'Filter Icon'} />
                <div className={styles.filterTxt}>Ev Hub -</div>
                <div className={styles.filterValue}>31%</div>
            </div>
        )
    }
    return (
        <div className={styles.chartFilterCont}>
            <FilterTag data={data.segmentation[0]} icon={thunderIcon2} />
            <FilterTag data={data.segmentation[1]} icon={caseIcon} />
            <FilterTag data={data.segmentation[2]} icon={thunderIcon2} />
            <FilterTag data={data.segmentation[3]} icon={turnIcon} />
            <FilterTag data={data.segmentation[4]} icon={moreIcon} />
        </div>
    )
}

export default Filters