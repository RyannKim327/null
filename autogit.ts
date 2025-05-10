function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Make sure nums1 is the smaller array to optimize the binary search
    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    let left = 0;
    let right = m;

    while (left <= right) {
        const partitionX = Math.floor((left + right) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        // If partitionX is 0 it means nothing is there on left side. Use -Infinity for maxLeftX
        // If partitionX is length of input then there is nothing on right side. Use +Infinity for minRightX
        const maxLeftX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        const minRightX = partitionX === m ? Infinity : nums1[partitionX];

        const maxLeftY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        const minRightY = partitionY === n ? Infinity : nums2[partitionY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // Correct partition found
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            // Move toward left in nums1
            right = partitionX - 1;
        } else {
            // Move toward right in nums1
            left = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted or invalid.");
}
