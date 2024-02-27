function findMedianSortedArrays(nums1, nums2) {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const length = mergedArray.length;
    
    if (length % 2 !== 0) {
        return mergedArray[Math.floor(length / 2)];
    } else {
        const mid = length / 2;
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    }
}

const nums1 = [1, 3];
const nums2 = [2];

console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2
