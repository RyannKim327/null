function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const totalLength = nums1.length + nums2.length;
    const half = Math.floor(totalLength / 2);
    let isEven = totalLength % 2 === 0;

    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    let left = 0;
    let right = nums1.length;

    while (left <= right) {
        const partitionX = Math.floor((left + right) / 2);
        const partitionY = half - partitionX;

        const maxX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        const minX = partitionX === nums1.length ? Number.POSITIVE_INFINITY : nums1[partitionX];

        const maxY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
        const minY = partitionY === nums2.length ? Number.POSITIVE_INFINITY : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            // Found the correct partition
            if (isEven) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            // Move towards the left in nums1
            right = partitionX - 1;
        } else {
            // Move towards the right in nums1
            left = partitionX + 1;
        }
    }
    
    throw new Error("Input arrays are not sorted");
}

// Sample usage
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2

const nums3 = [1, 2];
const nums4 = [3, 4];
console.log(findMedianSortedArrays(nums3, nums4)); // Output: 2.5
