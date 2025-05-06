function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    let left = 0, right = m;

    while (left <= right) {
        const partitionX = Math.floor((left + right) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        const maxLeftX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        const minRightX = partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];

        const maxLeftY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        const minRightY = partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // Found the correct partition
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            // Move partitionX to the left
            right = partitionX - 1;
        } else {
            // Move partitionX to the right
            left = partitionX + 1;
        }
    }

    // If input arrays are not sorted or empty, this should not happen
    throw new Error("Input arrays are not sorted or invalid");
}
