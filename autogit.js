function findMedianSortedArrays(nums1, nums2) {
    const combinedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    const n = combinedArray.length;
    
    if (n % 2 === 0) {
        // If the combined array has an even number of elements, median is average of two middle elements
        const midIndex = n / 2;
        return (combinedArray[midIndex - 1] + combinedArray[midIndex]) / 2;
    } else {
        // If the combined array has an odd number of elements, median is the middle element
        const midIndex = Math.floor(n / 2);
        return combinedArray[midIndex];
    }
}

const nums1 = [1, 3];
const nums2 = [2, 4];

console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2.5
