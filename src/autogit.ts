function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;

    let low = 0;
    let high = m;

    while (low <= high) {
        const partitionNums1 = Math.floor((low + high) / 2);
        const partitionNums2 = Math.floor((m + n + 1) / 2) - partitionNums1;

        const maxLeftNums1 = partitionNums1 === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionNums1 - 1];
        const minRightNums1 = partitionNums1 === m ? Number.POSITIVE_INFINITY : nums1[partitionNums1];

        const maxLeftNums2 = partitionNums2 === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionNums2 - 1];
        const minRightNums2 = partitionNums2 === n ? Number.POSITIVE_INFINITY : nums2[partitionNums2];

        if (maxLeftNums1 <= minRightNums2 && maxLeftNums2 <= minRightNums1) {
            // Found the correct partitions
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftNums1, maxLeftNums2) + Math.min(minRightNums1, minRightNums2)) / 2;
            } else {
                return Math.max(maxLeftNums1, maxLeftNums2);
            }
        } else if (maxLeftNums1 > minRightNums2) {
            // Move towards the left side of nums1
            high = partitionNums1 - 1;
        } else {
            // Move towards the right side of nums1
            low = partitionNums1 + 1;
        }
    }

    throw new Error("Input arrays are not sorted.");
}

// Example usage:
const array1 = [1, 3];
const array2 = [2];

console.log(findMedianSortedArrays(array1, array2)); // Output: 2

const array3 = [1, 2];
const array4 = [3, 4];

console.log(findMedianSortedArrays(array3, array4)); // Output: 2.5
// Test Case 1: Odd total elements
console.log(findMedianSortedArrays([1, 3], [2])); // Expected Output: 2

// Test Case 2: Even total elements
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Expected Output: 2.5

// Test Case 3: One array is empty
console.log(findMedianSortedArrays([], [1, 2, 3])); // Expected Output: 2

// Test Case 4: Both arrays have one element each
console.log(findMedianSortedArrays([1], [2])); // Expected Output: 1.5

// Test Case 5: Arrays with negative numbers
console.log(findMedianSortedArrays([-5, -3, -1], [-4, -2, 0])); // Expected Output: -2
