function findMedianSortedArrays(nums1, nums2) {
    const combinedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const length = combinedArray.length;

    if (length % 2 === 0) {
        const middleRight = length / 2;
        const middleLeft = middleRight - 1;
        return (combinedArray[middleLeft] + combinedArray[middleRight]) / 2;
    } else {
        const middle = Math.floor(length / 2);
        return combinedArray[middle];
    }
}

// Example usage:
const nums1 = [1, 3, 5];
const nums2 = [2, 4, 6];
const median = findMedianSortedArrays(nums1, nums2);
console.log(median); // Outputs: 3.5
