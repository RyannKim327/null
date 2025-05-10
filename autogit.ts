function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Ensure nums1 is the smaller array
    if (nums1.length > nums2.length) return findMedianSortedArrays(nums2, nums1);

    const m = nums1.length;
    const n = nums2.length;
    const halfLen = Math.floor((m + n + 1) / 2);

    let imin = 0, imax = m;

    while (imin <= imax) {
        const i = Math.floor((imin + imax) / 2);
        const j = halfLen - i;

        if (i < m && nums2[j - 1] > nums1[i]) {
            // i is too small, must increase it
            imin = i + 1;
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            // i is too big, must decrease it
            imax = i - 1;
        } else {
            // i is perfect
            let maxLeft = 0;
            if (i === 0) {
                maxLeft = nums2[j - 1];
            } else if (j === 0) {
                maxLeft = nums1[i - 1];
            } else {
                maxLeft = Math.max(nums1[i - 1], nums2[j - 1]);
            }

            if ((m + n) % 2 === 1) {
                return maxLeft;
            }

            let minRight = 0;
            if (i === m) {
                minRight = nums2[j];
            } else if (j === n) {
                minRight = nums1[i];
            } else {
                minRight = Math.min(nums1[i], nums2[j]);
            }

            return (maxLeft + minRight) / 2;
        }
    }

    throw new Error("Input arrays are not sorted or invalid");
}

// Example usage:
const arr1 = [1, 3];
const arr2 = [2];
console.log(findMedianSortedArrays(arr1, arr2));  // Output: 2
