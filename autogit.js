function findMedianSortedArrays(nums1, nums2) {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = mergedArray.length;
    
    if (length % 2 !== 0) {
        return mergedArray[Math.floor(length / 2)];
    } else {
        const midIndex = length / 2;
        return (mergedArray[midIndex - 1] + mergedArray[midIndex]) / 2;
    }
}

const nums1 = [1, 3];
const nums2 = [2, 4];

const median = findMedianSortedArrays(nums1, nums2);
console.log(median);
