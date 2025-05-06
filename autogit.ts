function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Make sure nums1 is the smaller array to minimize the binary search scope
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    let low = 0;
    let high = m;

    while (low <= high) {
        // Partition nums1 and nums2
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        // Handle edge cases with Infinity
        const maxLeftX = (partitionX === 0) ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        const minRightX = (partitionX === m) ? Number.POSITIVE_INFINITY : nums1[partitionX];

        const maxLeftY = (partitionY === 0) ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        const minRightY = (partitionY === n) ? Number.POSITIVE_INFINITY : nums2[partitionY];

        // Check if correct partition is found
        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // Odd length total combined array
            if ((m + n) % 2 === 1) {
                return Math.max(maxLeftX, maxLeftY);
            } else {
                // Even length total combined array
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            }
        } else if (maxLeftX > minRightY) {
            // Move search towards the left in nums1
            high = partitionX - 1;
        } else {
            // Move search towards the right in nums1
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted or invalid.");
}
