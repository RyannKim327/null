function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged: number[] = [];
    let i = 0, j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }

    // Append remaining elements
    while (i < nums1.length) merged.push(nums1[i++]);
    while (j < nums2.length) merged.push(nums2[j++]);

    const mid = Math.floor(merged.length / 2);

    if (merged.length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
}
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    if (nums1.length > nums2.length) {
        // Ensure nums1 is the smaller array
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;
    let low = 0, high = m;

    while (low <= high) {
        const partitionX = Math.floor((low + high) / 2);
        const partitionY = Math.floor((m + n + 1) / 2) - partitionX;

        const maxX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
        const maxY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];

        const minX = partitionX === m ? Number.POSITIVE_INFINITY : nums1[partitionX];
        const minY = partitionY === n ? Number.POSITIVE_INFINITY : nums2[partitionY];

        if (maxX <= minY && maxY <= minX) {
            if ((m + n) % 2 === 0) {
                return (Math.max(maxX, maxY) + Math.min(minX, minY)) / 2;
            } else {
                return Math.max(maxX, maxY);
            }
        } else if (maxX > minY) {
            high = partitionX - 1;
        } else {
            low = partitionX + 1;
        }
    }

    throw new Error("Input arrays are not sorted or invalid.");
}
