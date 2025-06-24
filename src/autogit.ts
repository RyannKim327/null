function mergeSortIterative(arr: number[]): number[] {
    const n = arr.length;

    // Helper function to merge two sorted subarrays
    function merge(left: number, mid: number, right: number): void {
        const temp: number[] = [];
        let i = left; // Pointer for the left subarray
        let j = mid;  // Pointer for the right subarray

        // Merge the two subarrays into temp
        while (i < mid && j < right) {
            if (arr[i] <= arr[j]) {
                temp.push(arr[i]);
                i++;
            } else {
                temp.push(arr[j]);
                j++;
            }
        }

        // Append any remaining elements from the left subarray
        while (i < mid) {
            temp.push(arr[i]);
            i++;
        }

        // Append any remaining elements from the right subarray
        while (j < right) {
            temp.push(arr[j]);
            j++;
        }

        // Copy the merged elements back into the original array
        for (let k = left; k < right; k++) {
            arr[k] = temp[k - left];
        }
    }

    // Iteratively merge subarrays of increasing sizes
    for (let size = 1; size < n; size *= 2) {
        for (let left = 0; left < n; left += 2 * size) {
            const mid = Math.min(left + size, n); // End of the first subarray
            const right = Math.min(left + 2 * size, n); // End of the second subarray
            merge(left, mid, right);
        }
    }

    return arr;
}

// Example usage
const unsortedArray = [38, 27, 43, 3, 9, 82, 10];
console.log("Unsorted:", unsortedArray);
const sortedArray = mergeSortIterative(unsortedArray);
console.log("Sorted:", sortedArray);
