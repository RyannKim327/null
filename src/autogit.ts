function mergeSortIterative(arr: number[]): number[] {
    const n = arr.length;
    let temp: number[] = new Array(n); // Temporary array for merging

    // Start with subarrays of size 1 and double the size in each iteration
    for (let size = 1; size < n; size *= 2) {
        // Merge all subarrays of the current size
        for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
            const mid = Math.min(leftStart + size - 1, n - 1); // End of the first subarray
            const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1); // End of the second subarray

            // Merge the two subarrays
            merge(arr, temp, leftStart, mid, rightEnd);
        }
    }

    return arr;
}

// Helper function to merge two sorted subarrays
function merge(arr: number[], temp: number[], left: number, mid: number, right: number): void {
    let i = left;    // Pointer for the left subarray
    let j = mid + 1; // Pointer for the right subarray
    let k = left;    // Pointer for the temporary array

    // Merge the two subarrays into the temporary array
    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }

    // Copy any remaining elements from the left subarray
    while (i <= mid) {
        temp[k++] = arr[i++];
    }

    // Copy any remaining elements from the right subarray
    while (j <= right) {
        temp[k++] = arr[j++];
    }

    // Copy the merged elements back into the original array
    for (let m = left; m <= right; m++) {
        arr[m] = temp[m];
    }
}
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Original Array:", arr);

const sortedArr = mergeSortIterative(arr);
console.log("Sorted Array:", sortedArr);
Original Array: [38, 27, 43, 3, 9, 82, 10]
Sorted Array: [3, 9, 10, 27, 38, 43, 82]
