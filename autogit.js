function findMedianSortedArrays(nums1, nums2) {
    const combinedArray = [...nums1, ...nums2];
    combinedArray.sort((a, b) => a - b);

    const length = combinedArray.length;
    if (length % 2 === 0) {
        return (combinedArray[length / 2 - 1] + combinedArray[length / 2]) / 2;
    } else {
        return combinedArray[Math.floor(length / 2)];
    }
}

// Example
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.0
