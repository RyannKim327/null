function findMedianSortedArrays(nums1, nums2) {
    let combined = nums1.concat(nums2).sort((a, b) => a - b);
    let medianIndex = Math.floor(combined.length / 2);

    if (combined.length % 2 === 0) {
        return (combined[medianIndex - 1] + combined[medianIndex]) / 2;
    } else {
        return combined[medianIndex];
    }
}

// Example usage
let nums1 = [1, 3];
let nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.0
