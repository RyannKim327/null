function findMedianSortedArrays(nums1, nums2) {
    let combinedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    let length = combinedArray.length;
    let mid = Math.floor(length / 2);
    
    if (length % 2 === 0) {
        return (combinedArray[mid - 1] + combinedArray[mid]) / 2;
    } else {
        return combinedArray[mid];
    }
}

// Example usage
let nums1 = [1, 3];
let nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2
