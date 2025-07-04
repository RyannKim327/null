function isArraySortedAscending(arr: number[]): boolean {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // If the current element is greater than the next element, return false
        }
    }
    return true; // If no such pair is found, the array is sorted
}

// Example usage:
const nums1 = [1, 2, 3, 4, 5];
const nums2 = [1, 3, 2, 4, 5];

console.log(isArraySortedAscending(nums1)); // Output: true
console.log(isArraySortedAscending(nums2)); // Output: false
