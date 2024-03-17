function findMedianSortedArrays(nums1, nums2) {
    const merged = nums1.concat(nums2).sort((a, b) => a - b);
    const n = merged.length;
    
    if (n % 2 === 0) {
        const mid1 = merged[n / 2 - 1];
        const mid2 = merged[n / 2];
        return (mid1 + mid2) / 2;
    } else {
        return merged[Math.floor(n / 2)];
    }
}

// Example usage
const nums1 = [1, 3];
const nums2 = [2];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 2
