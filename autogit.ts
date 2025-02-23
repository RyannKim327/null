function mergeSortIterative(arr: number[]): number[] {
    const n = arr.length;
    let currentSize; // Size of the subarrays to be merged
    let leftStart; // Starting index of the left subarray

    // Merge subarrays in bottom-up manner
    for (currentSize = 1; currentSize < n; currentSize *= 2) {
        for (leftStart = 0; leftStart < n - 1; leftStart += 2 * currentSize) {
            // Find the right subarray's end index
            const mid = Math.min(leftStart + currentSize - 1, n - 1);
            const rightEnd = Math.min(leftStart + 2 * currentSize - 1, n - 1);

            // Merge the two subarrays
            merge(arr, leftStart, mid, rightEnd);
        }
    }
    return arr;
}

function merge(arr: number[], leftStart: number, mid: number, rightEnd: number): void {
    const leftArray = arr.slice(leftStart, mid + 1);
    const rightArray = arr.slice(mid + 1, rightEnd + 1);

    let i = 0; // Initial index of the first subarray
    let j = 0; // Initial index of the second subarray
    let k = leftStart; // Initial index of merged subarray

    // Merge the two arrays back into arr
    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] <= rightArray[j]) {
            arr[k++] = leftArray[i++];
        } else {
            arr[k++] = rightArray[j++];
        }
    }

    // Copy remaining elements of leftArray if any
    while (i < leftArray.length) {
        arr[k++] = leftArray[i++];
    }

    // Copy remaining elements of rightArray if any
    while (j < rightArray.length) {
        arr[k++] = rightArray[j++];
    }
}

// Example usage:
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSortIterative(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
