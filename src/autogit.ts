function mergeSortIterative(arr: number[]): number[] {
    const n = arr.length;
    let temp: number[] = new Array(n); // Temporary array for merging

    // Iterate over subarray sizes (starting from 1, doubling each time)
    for (let size = 1; size < n; size *= 2) {
        // Merge all pairs of subarrays of the current size
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
function merge(arr: number[], temp: number[], leftStart: number, mid: number, rightEnd: number): void {
    let i = leftStart; // Pointer for the left subarray
    let j = mid + 1;   // Pointer for the right subarray
    let k = leftStart; // Pointer for the temporary array

    // Merge the two subarrays into the temporary array
    while (i <= mid && j <= rightEnd) {
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
    while (j <= rightEnd) {
        temp[k++] = arr[j++];
    }

    // Copy the merged elements back into the original array
    for (let m = leftStart; m <= rightEnd; m++) {
        arr[m] = temp[m];
    }
}
const array = [38, 27, 43, 3, 9, 82, 10];
console.log("Original Array:", array);

const sortedArray = mergeSortIterative(array);
console.log("Sorted Array:", sortedArray);
Original Array: [38, 27, 43, 3, 9, 82, 10]
Sorted Array: [3, 9, 10, 27, 38, 43, 82]
