function findMedianSortedArrays(nums1, nums2) {
    let combinedArray = nums1.concat(nums2).sort((a, b) => a - b);
    let length = combinedArray.length;
    
    if (length % 2 === 0) {
        let mid = length / 2;
        return (combinedArray[mid - 1] + combinedArray[mid]) / 2;
    } else {
        let mid = Math.floor(length / 2);
        return combinedArray[mid];
    }
}

// Example usage
const nums1 = [1, 3];
const nums2 = [2, 4];

console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.5
