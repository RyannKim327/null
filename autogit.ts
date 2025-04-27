function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // Ensure nums1 is the smaller array for efficiency
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;

    let left = 0;
    let right = m;

    while (left <= right) {
        const i = Math.floor((left + right) / 2); // Partition in nums1
        const j = Math.floor((m + n + 1) / 2) - i; // Complement partition in nums2

        const nums1LeftMax = i === 0 ? -Infinity : nums1[i - 1];
        const nums1RightMin = i === m ? Infinity : nums1[i];

        const nums2LeftMax = j === 0 ? -Infinity : nums2[j - 1];
        const nums2RightMin = j === n ? Infinity : nums2[j];

        if (nums1LeftMax <= nums2RightMin && nums2LeftMax <= nums1RightMin) {
            // Correct partition found
            if ((m + n) % 2 === 0) {
                // Even total length
                return (Math.max(nums1LeftMax, nums2LeftMax) + Math.min(nums1RightMin, nums2RightMin)) / 2;
            } else {
                // Odd total length
                return Math.max(nums1LeftMax, nums2LeftMax);
            }
        } else if (nums1LeftMax > nums2RightMin) {
            // Move partition in nums1 to the left
            right = i - 1;
        } else {
            // Move partition in nums1 to the right
            left = i + 1;
        }
    }

    throw new Error("Input arrays are not sorted or invalid");
}
