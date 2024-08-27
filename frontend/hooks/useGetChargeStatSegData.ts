
type SegmentDataType = {
    segmentName: string
    values: number[]
    segmentColor: string
}

type SegmentNameType= Pick<SegmentDataType, "segmentName">
type SegmentColorType= Pick<SegmentDataType, "segmentColor">

const useGetChargeStatSegData = (segmentName:SegmentNameType,  segmentColor: SegmentColorType): SegmentDataType => {
    return {
        segmentName: segmentName,
        values: Array.from({ length: 24 }, () => Math.floor(Math.random() * 200) + 50),
        segmentColor: segmentColor,

    };
}
                
export default useGetChargeStatSegData;