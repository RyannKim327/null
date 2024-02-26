function findMedianSortedArrays(nums1, nums2) {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const totalLength = mergedArray.length;
    
    if (totalLength % 2 === 0) {
        const midIndex1 = totalLength / 2 - 1;
        const midIndex2 = totalLength / 2;
        return (mergedArray[midIndex1] + mergedArray[midIndex2]) / 2;
    } else {
        const midIndex = Math.floor(totalLength / 2);
        return mergedArray[midIndex];
    }
}

// Example usage
const nums1 = [1, 3];
const nums2 = [2, 4];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.5
