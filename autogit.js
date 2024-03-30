function findMedianSortedArrays(nums1, nums2) {
    const combinedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const totalLength = combinedArray.length;

    if (totalLength % 2 === 0) {
        return (combinedArray[totalLength / 2 - 1] + combinedArray[totalLength / 2]) / 2;
    } else {
        return combinedArray[(totalLength - 1) / 2];
    }
}

// Example usage
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 3.5
