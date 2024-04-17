function findMedianSortedArrays(nums1, nums2) {
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = merged.length;

    if (length % 2 === 0) {
        return (merged[length / 2 - 1] + merged[length / 2]) / 2;
    } else {
        return merged[Math.floor(length / 2)];
    }
}

const nums1 = [1, 3];
const nums2 = [2];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median);
