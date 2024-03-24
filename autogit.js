function findMedianSortedArrays(nums1, nums2) {
    let merged = [...nums1, ...nums2].sort((a, b) => a - b);
    let len = merged.length;
    
    if (len % 2 === 0) {
        let mid = len / 2;
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[Math.floor(len / 2)];
    }
}

// Example
let nums1 = [1, 3];
let nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2
