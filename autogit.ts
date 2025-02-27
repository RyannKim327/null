function mergeSort(arr: number[]): number[] {
    const n = arr.length;
    let currentSize; // Size of subarrays
    let leftStart; // Starting index of left subarray

    // Start with size of 1, then 2, 4, ..., until the maximum size of the array
    for (currentSize = 1; currentSize < n; currentSize *= 2) {
        // Pick starting point of different subarrays of currentSize
        for (leftStart = 0; leftStart < n - 1; leftStart += 2 * currentSize) {
            // Find ending point of left subarray. mid is index of right subarray
            const mid = Math.min(leftStart + currentSize - 1, n - 1);
            const rightEnd = Math.min(leftStart + 2 * currentSize - 1, n - 1);

            // Merge the subarrays arr[leftStart...mid] and arr[mid+1...rightEnd]
            merge(arr, leftStart, mid, rightEnd);
        }
    }

    return arr;
}

function merge(arr: number[], leftStart: number, mid: number, rightEnd: number): void {
    const leftArray = arr.slice(leftStart, mid + 1);
    const rightArray = arr.slice(mid + 1, rightEnd + 1);

    let i = 0; // Initial index of first subarray
    let j = 0; // Initial index of second subarray
    let k = leftStart; // Initial index of merged subarray

    // Merge the subarrays back into the original array
    while (i < leftArray.length && j < rightArray.length) {
        if (leftArray[i] <= rightArray[j]) {
            arr[k++] = leftArray[i++];
        } else {
            arr[k++] = rightArray[j++];
        }
    }

    // Copy the remaining elements of leftArray, if any
    while (i < leftArray.length) {
        arr[k++] = leftArray[i++];
    }

    // Copy the remaining elements of rightArray, if any
    while (j < rightArray.length) {
        arr[k++] = rightArray[j++];
    }
}

// Example usage:
const arr = [12, 11, 13, 5, 6, 7];
console.log("Unsorted array:", arr);
console.log("Sorted array:", mergeSort(arr));
