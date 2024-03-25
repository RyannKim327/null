function findMedianSortedArrays(nums1, nums2) {
    const mergedArray = nums1.concat(nums2).sort((a, b) => a - b);

    const n = mergedArray.length;

    if (n % 2 === 0) {
        return (mergedArray[n / 2 - 1] + mergedArray[n / 2]) / 2;
    } else {
        return mergedArray[Math.floor(n / 2)];
    }
}

const nums1 = [1, 3];
const nums2 = [2, 4];

const median = findMedianSortedArrays(nums1, nums2);
console.log(median);
