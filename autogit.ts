function merge(arr: number[], left: number, mid: number, right: number): void {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);

    let i = 0, j = 0, k = left;
    
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k++] = leftArr[i++];
        } else {
            arr[k++] = rightArr[j++];
        }
    }

    while (i < leftArr.length) {
        arr[k++] = leftArr[i++];
    }

    while (j < rightArr.length) {
        arr[k++] = rightArr[j++];
    }
}

function iterativeMergeSort(arr: number[]): void {
    const n = arr.length;

    // For current size of subarrays to be merged currSize varies from 1 to n/2
    for (let currSize = 1; currSize <= n - 1; currSize = 2 * currSize) {
        // Pick starting point of different subarrays of current size
        for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * currSize) {
            // Find ending point of left subarray
            const mid = Math.min(leftStart + currSize - 1, n - 1);

            // Find ending point of right subarray
            const rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);

            // Merge subarrays arr[leftStart...mid] & arr[mid+1...rightEnd]
            merge(arr, leftStart, mid, rightEnd);
        }
    }
}

// Example usage:
const arr = [12, 11, 13, 5, 6, 7];
iterativeMergeSort(arr);
console.log(arr);  // [5, 6, 7, 11, 12, 13]
