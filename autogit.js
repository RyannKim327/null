function findMedianSortedArrays(nums1, nums2) {
    const mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = mergedArray.length;
    
    if (length % 2 === 0) {
        // If the merged array has an even length, return the average of the two middle elements
        return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
    } else {
        // If the merged array has an odd length, return the middle element
        return mergedArray[Math.floor(length / 2)];
    }
}

// Example usage
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.0
