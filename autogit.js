function findMedianSortedArrays(nums1, nums2) {
    const combinedArray = nums1.concat(nums2).sort((a, b) => a - b);
    const length = combinedArray.length;
    
    if (length % 2 !== 0) {
        // If the combined array has odd length
        return combinedArray[Math.floor(length / 2)];
    } else {
        // If the combined array has even length
        return (combinedArray[length / 2 - 1] + combinedArray[length / 2]) / 2;
    }
}

// Example usage
const nums1 = [1, 3];
const nums2 = [2, 4];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 2.5
