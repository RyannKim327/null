function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Merge the two arrays
    const merged = [...nums1, ...nums2].sort((a, b) => a - b);
    const mid = Math.floor(merged.length / 2);

    if (merged.length % 2 === 0) {
        // If even, return the average of the middle two elements
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        // If odd, return the middle element
        return merged[mid];
    }
}

// Example usage
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2

const nums3 = [1, 2];
const nums4 = [3, 4];
console.log(findMedianSortedArrays(nums3, nums4)); // Output: 2.5
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const len1 = nums1.length;
    const len2 = nums2.length;
    const totalLen = len1 + len2;
    let left = 0, right = len1;

    while (left <= right) {
        const partition1 = Math.floor((left + right) / 2);
        const partition2 = Math.floor((totalLen + 1) / 2) - partition1;

        const maxLeft1 = (partition1 === 0) ? Number.MIN_SAFE_INTEGER : nums1[partition1 - 1];
        const minRight1 = (partition1 === len1) ? Number.MAX_SAFE_INTEGER : nums1[partition1];

        const maxLeft2 = (partition2 === 0) ? Number.MIN_SAFE_INTEGER : nums2[partition2 - 1];
        const minRight2 = (partition2 === len2) ? Number.MAX_SAFE_INTEGER : nums2[partition2];

        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            // We have partitioned the array properly
            if (totalLen % 2 === 0) {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2;
            } else {
                return Math.max(maxLeft1, maxLeft2);
            }
        } else if (maxLeft1 > minRight2) {
            // We are too far on the right side for partition1. Go on left side.
            right = partition1 - 1;
        } else {
            // We are too far on the left side for partition1. Go on right side.
            left = partition1 + 1;
        }
    }

    throw new Error("Input arrays are not sorted.");
}

// Example usage
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2

const nums3 = [1, 2];
const nums4 = [3, 4];
console.log(findMedianSortedArrays(nums3, nums4)); // Output: 2.5
