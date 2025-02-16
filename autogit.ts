function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    const merged = mergeSortedArrays(nums1, nums2);
    const len = merged.length;

    if (len % 2 === 0) {
        // If even, average the two middle numbers
        return (merged[len / 2 - 1] + merged[len / 2]) / 2;
    } else {
        // If odd, return the middle number
        return merged[Math.floor(len / 2)];
    }
}

function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    let i = 0, j = 0;
    const merged = [];

    while (i < arr1.length || j < arr2.length) {
        if (i < arr1.length && (j >= arr2.length || arr1[i] < arr2[j])) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    
    return merged;
}

// Example usage:
const nums1 = [1, 3];
const nums2 = [2];
console.log(findMedianSortedArrays(nums1, nums2)); // Output: 2

const nums3 = [1, 2];
const nums4 = [3, 4];
console.log(findMedianSortedArrays(nums3, nums4)); // Output: 2.5
