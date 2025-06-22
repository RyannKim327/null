function mergeSortIterative(arr: number[]): number[] {
    const n = arr.length;
    let temp: number[] = new Array(n); // Temporary array for merging

    // Merge function to merge two sorted subarrays
    function merge(left: number, mid: number, right: number): void {
        let i = left;    // Starting index of the left subarray
        let j = mid + 1; // Starting index of the right subarray
        let k = left;    // Index for the temporary array

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
        for (let x = left; x <= right; x++) {
            arr[x] = temp[x];
        }
    }

    // Main iterative merge sort logic
    for (let size = 1; size < n; size *= 2) { // Size of subarrays to merge
        for (let left = 0; left < n; left += 2 * size) {
            const mid = Math.min(left + size - 1, n - 1); // End of the left subarray
            const right = Math.min(left + 2 * size - 1, n - 1); // End of the right subarray
            merge(left, mid, right);
        }
    }

    return arr;
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
console.log("Original array:", array);
const sortedArray = mergeSortIterative(array);
console.log("Sorted array:", sortedArray);
Original array: [38, 27, 43, 3, 9, 82, 10]
Sorted array: [3, 9, 10, 27, 38, 43, 82]
