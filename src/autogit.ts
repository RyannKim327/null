function mergeSortIterative(arr: number[]): number[] {
    const n = arr.length;

    // Helper function to merge two sorted subarrays
    function merge(left: number, mid: number, right: number): void {
        const leftSize = mid - left + 1;
        const rightSize = right - mid;

        // Create temporary arrays for the left and right subarrays
        const leftArr = arr.slice(left, mid + 1);
        const rightArr = arr.slice(mid + 1, right + 1);

        let i = 0, j = 0, k = left;

        // Merge the two subarrays back into the original array
        while (i < leftSize && j < rightSize) {
            if (leftArr[i] <= rightArr[j]) {
                arr[k++] = leftArr[i++];
            } else {
                arr[k++] = rightArr[j++];
            }
        }

        // Copy any remaining elements from the left subarray
        while (i < leftSize) {
            arr[k++] = leftArr[i++];
        }

        // Copy any remaining elements from the right subarray
        while (j < rightSize) {
            arr[k++] = rightArr[j++];
        }
    }

    // Start with subarrays of size 1 and double the size at each step
    for (let size = 1; size < n; size *= 2) {
        for (let left = 0; left < n; left += 2 * size) {
            const mid = Math.min(left + size - 1, n - 1); // End of the first subarray
            const right = Math.min(left + 2 * size - 1, n - 1); // End of the second subarray

            // Merge the two subarrays
            merge(left, mid, right);
        }
    }

    return arr;
}

// Example usage:
const array = [38, 27, 43, 3, 9, 82, 10];
console.log("Sorted Array:", mergeSortIterative(array));
