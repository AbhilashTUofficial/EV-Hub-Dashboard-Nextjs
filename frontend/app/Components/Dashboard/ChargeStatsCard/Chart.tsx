import React from 'react'
import styles from './styles.module.css'

type SegmentData = {
    segmentName: string
    values: number[]
    segmentColor: string
}
const Chart = () => {
    const segmentCount = 24;
    const data: { segmentation: SegmentData[] } = {
        segmentation: [
            {
                segmentName: 'segment 1',
                values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 10, 8],
                segmentColor: 'red'
            },
            {
                segmentName: 'segment 2',
                values: [5, 3, 2, 14, 5, 3, 2, 14, 5, 3, 2, 14, 5, 3, 2, 14, 5, 3, 2, 14, 5, 3, 2, 14],
                segmentColor: 'green'

            }
        ]
    }
    return (
        <div className={styles.chart}>
            {/* <div className={styles.segment}>
                {
                    Array.from({ length: segmentCount }, (_, index) => (
                        <div className={styles.emptySegment} key={index} />
                    ))
                }
            </div> */}

            {
                data.segmentation.map((segments, index) => (
                    <div className={styles.segment}>
                        {/* {
                            segments.values.map((segments, index) => (
                                Array.from({ length: segmentCount }, (_, index) => (
                                    <div className={styles.dataSegment} key={index} />
                                ))
                            ))
                        } */}
                    </div>
                ))
            }



        </div>
    )
}

export default Chart