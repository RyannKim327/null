function mergeSortIterative(arr: number[]): number[] {
    const n = arr.length;
    let tempArray = new Array(n); // Temporary array for merging

    // Merge function to merge two sorted subarrays
    function merge(left: number, mid: number, right: number): void {
        let i = left; // Starting index of the left subarray
        let j = mid;  // Starting index of the right subarray
        let k = left; // Index for the temporary array

        // Merge elements from both subarrays into tempArray
        while (i < mid && j < right) {
            if (arr[i] <= arr[j]) {
                tempArray[k++] = arr[i++];
            } else {
                tempArray[k++] = arr[j++];
            }
        }

        // Copy any remaining elements from the left subarray
        while (i < mid) {
            tempArray[k++] = arr[i++];
        }

        // Copy any remaining elements from the right subarray
        while (j < right) {
            tempArray[k++] = arr[j++];
        }

        // Copy the sorted elements back into the original array
        for (let x = left; x < right; x++) {
            arr[x] = tempArray[x];
        }
    }

    // Perform merge sort iteratively
    for (let size = 1; size < n; size *= 2) { // Subarray size doubles each iteration
        for (let left = 0; left < n; left += 2 * size) {
            const mid = Math.min(left + size, n); // End of the left subarray
            const right = Math.min(left + 2 * size, n); // End of the right subarray
            merge(left, mid, right);
        }
    }

    return arr;
}

// Example usage
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
console.log("Sorted Array:", mergeSortIterative(unsortedArray));
Sorted Array: [3, 9, 10, 27, 38, 43, 82]
