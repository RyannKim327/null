function findMedianSortedArrays(nums1, nums2) {
    const combinedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const length = combinedArray.length;

    if (length % 2 === 0) {
        const mid1 = combinedArray[length / 2 - 1];
        const mid2 = combinedArray[length / 2];
        return (mid1 + mid2) / 2;
    } else {
        return combinedArray[(length + 1) / 2 - 1];
    }
}

// Example usage:
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
console.log(findMedianSortedArrays(nums1, nums2));  // Output: 3.5
