function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged: number[] = [];
    let i = 0, j = 0;
    
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i++]);
        } else {
            merged.push(nums2[j++]);
        }
    }
    
    while (i < nums1.length) {
        merged.push(nums1[i++]);
    }
    
    while (j < nums2.length) {
        merged.push(nums2[j++]);
    }
    
    const len = merged.length;
    if (len % 2 === 0) {
        return (merged[len / 2 - 1] + merged[len / 2]) / 2;
    } else {
        return merged[Math.floor(len / 2)];
    }
}
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Ensure nums1 is smaller for minimal binary search range
    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

    const m = nums1.length, n = nums2.length;
    let low = 0, high = m;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        const maxLeftX = (partitionX === 0) ? -Infinity : nums1[partitionX - 1];
        const minRightX = (partitionX === m) ? Infinity : nums1[partitionX];
        
        const maxLeftY = (partitionY === 0) ? -Infinity : nums2[partitionY - 1];
        const minRightY = (partitionY === n) ? Infinity : nums2[partitionY];

        if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
            // Found correct partition
            if ((m + n) % 2 === 0) {
                return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
            } else {
                return Math.max(maxLeftX, maxLeftY);
            }
        } else if (maxLeftX > minRightY) {
            // Move towards left side
            high = partitionX - 1;
        } else {
            // Move towards right side
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted properly");
}
