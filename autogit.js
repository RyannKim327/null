function findMedianSortedArrays(nums1, nums2) {
    const merged = nums1.concat(nums2).sort((a, b) => a - b);
    const length = merged.length;

    if (length % 2 === 0) {
        const mid = length / 2;
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        const mid = Math.floor(length / 2);
        return merged[mid];
    }
}

// Example usage
const nums1 = [1, 3];
const nums2 = [2, 4];

const median = findMedianSortedArrays(nums1, nums2);
console.log(median);
