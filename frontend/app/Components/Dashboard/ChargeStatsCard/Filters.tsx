'use client'
import React from 'react'
import styles from './styles.module.css'
import Image from 'next/image'
import { caseIcon, moreIcon, thunderIcon2, turnIcon } from '@/app/Assets/Images/AssetsExports'
import useGetChargeStatSegData from '@/hooks/useGetChargeStatSegData'

// Define types for the segmentation and the props
type Segment = {
    segmentName: string;
    values: number[];
    segmentColor: string;
}

type FilterProps = {
    setSegmentation: React.Dispatch<React.SetStateAction<Segment[]>>;
    segmentation: Segment[];
}

type FilterTagProps = {
    icon: any;
    segmentColor: string;
    segmentName: string;
    segmentation: Segment[];
    setSegmentation: React.Dispatch<React.SetStateAction<Segment[]>>;
}

const Filters: React.FC<FilterProps> = ({ setSegmentation, segmentation }) => {
    const FilterTag: React.FC<FilterTagProps> = ({ icon, segmentColor, segmentName, segmentation, setSegmentation }) => {

        const checkSegmentEmpty = (segmentData: number[]) => segmentData.reduce((sum, value) => sum + value, 0) === 0;

        const getCurrentSegment = (segmentName: string) => segmentation.find((segment) => segment.segmentName === segmentName);

        const handleClick = (segmentName: string, segmentColor: string) => {
            const unchangedData = segmentation.filter((segment) => segment.segmentName !== segmentName);
            let newData: Segment = {
                segmentName,
                values: Array.from({ length: 24 }, () => 0),
                segmentColor
            };

            const currentSegment = getCurrentSegment(segmentName);
            if (currentSegment && checkSegmentEmpty(currentSegment.values)) {
                newData = useGetChargeStatSegData(segmentName, segmentColor);
            }

            setSegmentation([...unchangedData, newData]);
        };

        return (
            <div onClick={() => handleClick(segmentName, segmentColor)} className={styles.chartFilter}>
                <Image
                    style={{ backgroundColor: segmentColor }}
                    className={styles.filterIcon}
                    src={checkSegmentEmpty(getCurrentSegment(segmentName)?.values || []) ? icon.inactive : icon.active}
                    alt={'Filter Icon'}
                />
                <div className={styles.filterTxt}>Ev Hub</div>
                <div className={styles.filterValue}>31%</div>
            </div>
        );
    };

    return (
        <div className={styles.chartFilterCont}>
            <FilterTag segmentName='segment 1' segmentColor='red' icon={thunderIcon2} segmentation={segmentation} setSegmentation={setSegmentation} />
            <FilterTag segmentName='segment 2' segmentColor='var(--amberColor)' icon={caseIcon} segmentation={segmentation} setSegmentation={setSegmentation} />
            <FilterTag segmentName='segment 3' segmentColor='var(--primaryColor)' icon={thunderIcon2} segmentation={segmentation} setSegmentation={setSegmentation} />
            <FilterTag segmentName='segment 4' segmentColor='var(--purpleColor)' icon={turnIcon} segmentation={segmentation} setSegmentation={setSegmentation} />
            <FilterTag segmentName='segment 5' segmentColor='var(--orangeColor)' icon={moreIcon} segmentation={segmentation} setSegmentation={setSegmentation} />
        </div>
    );
}

export default Filters;
