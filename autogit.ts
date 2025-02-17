function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const totalLength = nums1.length + nums2.length;
    const half = Math.floor(totalLength / 2);

    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let left = 0;
    let right = nums1.length;

    while (left <= right) {
        const partition1 = Math.floor((left + right) / 2);
        const partition2 = half - partition1;

        const left1 = partition1 === 0 ? -Infinity : nums1[partition1 - 1];
        const right1 = partition1 === nums1.length ? Infinity : nums1[partition1];
        const left2 = partition2 === 0 ? -Infinity : nums2[partition2 - 1];
        const right2 = partition2 === nums2.length ? Infinity : nums2[partition2];

        // Check if we have partitioned correctly
        if (left1 <= right2 && left2 <= right1) {
            // We have a correct partition
            if (totalLength % 2 === 0) {
                return (Math.max(left1, left2) + Math.min(right1, right2)) / 2;
            } else {
                return Math.max(left1, left2);
            }
        } else if (left1 > right2) {
            // Move towards left in nums1
            right = partition1 - 1;
        } else {
            // Move towards right in nums1
            left = partition1 + 1;
        }
    }

    throw new Error("Input arrays were not sorted.");
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2

const nums3 = [1, 2];
const nums4 = [3, 4];
console.log(findMedianSortedArrays(nums3, nums4)); // Output: 2.5
