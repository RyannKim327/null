function findMedianSortedArrays(nums1, nums2) {
    // Concatenate the two arrays and sort them
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);

    const n = mergedArray.length;

    // Check if the length of the merged arrays is odd or even to find the median
    if (n % 2 === 0) {
        // If the length is even, return the average of the two middle elements
        return (mergedArray[n/2 - 1] + mergedArray[n/2]) / 2;
    } else {
        // If the length is odd, return the middle element
        return mergedArray[Math.floor(n/2)];
    }
}

// Example
const nums1 = [1, 3];
const nums2 = [2];

console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.0
