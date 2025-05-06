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

        const maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        const minX = partitionX === x ? Infinity : nums1[partitionX];
        
        const maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        const minY = partitionY === y ? Infinity : nums2[partitionY];

        // Check if we have found the perfect partitions
        if (maxX <= minY && maxY <= minX) {
            // We found the right partitions
            if ((x + y) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            // We are too far on the right side for partitionX. Go on the left side.
            high = partitionX - 1;
        } else {
            // We are too far on the left side for partitionX. Go on the right side.
            low = partitionX + 1;
        }
    }

    // If we arrive here, it means the arrays are not sorted, which should not happen as per the problem statement.
    throw new Error("Input arrays are not sorted");
}

// Example usage
const nums1 = [1, 3];
const nums2 = [2];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Output: 2

const nums3 = [1, 2];
const nums4 = [3, 4];
const median2 = findMedianSortedArrays(nums3, nums4);
console.log(median2); // Output: 2.5
