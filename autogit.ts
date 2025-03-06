function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const totalLength = nums1.length + nums2.length;
    const half = Math.floor(totalLength / 2);
    
    // Ensuring nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let left = 0;
    let right = nums1.length;

    while (left <= right) {
        const partition1 = Math.floor((left + right) / 2);
        const partition2 = half - partition1;

        const max1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        const min1 = partition1 === nums1.length ? Infinity : nums1[partition1];

        const max2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        const min2 = partition2 === nums2.length ? Infinity : nums2[partition2];

        if (max1 <= min2 && max2 <= min1) {
            // We have partitioned the arrays correctly
            if (totalLength % 2 === 0) {
                return (Math.max(max1, max2) + Math.min(min1, min2)) / 2;
            } else {
                return Math.max(max1, max2);
            }
        } else if (max1 > min2) {
            // Too far on the right side for partition1, go left
            right = partition1 - 1;
        } else {
            // Too far on the left side for partition1, go right
            left = partition1 + 1;
        }
    }

    throw new Error("Input arrays are not sorted.");
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2

const nums3 = [1, 2];
const nums4 = [3, 4];
console.log(findMedianSortedArrays(nums3, nums4)); // Output: 2.5
