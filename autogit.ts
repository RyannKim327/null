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
        const partitionX = left + Math.floor((right - left) / 2);
        const partitionY = half - partitionX;

        const maxX = partitionX === 0 ? -Infinity : nums1[partitionX - 1];
        const minX = partitionX === nums1.length ? Infinity : nums1[partitionX];

        const maxY = partitionY === 0 ? -Infinity : nums2[partitionY - 1];
        const minY = partitionY === nums2.length ? Infinity : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            // Found the correct partition
            if (totalLength % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            right = partitionX - 1; // Move towards left side of nums1
        } else {
            left = partitionX + 1; // Move towards right side of nums1
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
