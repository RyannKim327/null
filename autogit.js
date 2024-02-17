function findMedianSortedArrays(nums1, nums2) {
    const combined = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = combined.length;

    if (length % 2 === 0) {
        const mid = length / 2;
        return (combined[mid - 1] + combined[mid]) / 2;
    } else {
        const mid = Math.floor(length / 2);
        return combined[mid];
    }
}

const nums1 = [1, 3];
const nums2 = [2, 4];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.5
