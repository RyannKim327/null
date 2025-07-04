function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const x = nums1.length;
    const y = nums2.length;

    let low = 0;
    let high = x;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((x + y + 1) / 2) - partitionX;

        const maxX = (partitionX === 0) ? Number.MIN_SAFE_INTEGER : nums1[partitionX - 1];
        const minX = (partitionX === x) ? Number.MAX_SAFE_INTEGER : nums1[partitionX];

        const maxY = (partitionY === 0) ? Number.MIN_SAFE_INTEGER : nums2[partitionY - 1];
        const minY = (partitionY === y) ? Number.MAX_SAFE_INTEGER : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            // We have found the correct partitions
            if ((x + y) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            // Move towards the left in nums1
            high = partitionX - 1;
        } else {
            // Move towards the right in nums1
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted.");
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.0

const nums1_2 = [1, 2];
const nums2_2 = [3, 4];
console.log(findMedianSortedArrays(nums1_2, nums2_2)); // Output: 2.5
