function findMedianSortedArrays(nums1, nums2) {
    let mergedArray = nums1.concat(nums2).sort((a, b) => a - b);
    let length = mergedArray.length;
    
    if (length % 2 === 0) {
        return (mergedArray[length / 2 - 1] + mergedArray[length / 2]) / 2;
    } else {
        return mergedArray[Math.floor(length / 2)];
    }
}

// Example usage
let nums1 = [1, 3];
let nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2

