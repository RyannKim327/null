function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = mergedArray.length;

    if (length % 2 === 0) {
        return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
    } else {
        return mergedArray[Math.floor(length / 2)];
    }
}

const nums1 = [1, 3];
const nums2 = [2];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median);
