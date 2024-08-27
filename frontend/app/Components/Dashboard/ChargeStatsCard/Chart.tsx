import React from 'react'
import styles from './styles.module.css'

type SegmentData = {
    segmentName: string
    values: number[]
    segmentColor: string
}

type ChartProps = {
    data: SegmentData[]
}
const Chart: React.FC<ChartProps> = ({ data }) => {
    const segmentCount = 24;

    return (
        <div className={styles.chart}>
            <div className={styles.segment}>
                {
                    Array.from({ length: segmentCount }, (_, index) => (
                        <div className={styles.emptySegment} key={index} />
                    ))
                }
            </div>

            {
                data.map((segments, index) => (
                    <div className={styles.segment}>
                        {
                            Array.from({ length: segmentCount }, (_, index) => (
                                <div style={{
                                    backgroundColor: segments.segmentColor, height: segments.values[index]
                                }}
                                    className={styles.dataSegment} key={index} />
                            ))
                        }
                    </div>
                ))
            }



        </div>
    )
}

export default Chart