function mergeSort(arr: number[]): number[] {
    const n = arr.length;
    let currentSize; // Size of subarrays to be merged
    let leftStart; // Starting index of left subarray

    // Create a temporary array to help with merging
    const tempArray = new Array(n);

    // Current size ranges from 1 to n/2
    for (currentSize = 1; currentSize < n; currentSize *= 2) {
        for (leftStart = 0; leftStart < n - currentSize; leftStart += 2 * currentSize) {
            // Find the end of the left subarray
            const mid = Math.min(leftStart + currentSize - 1, n - 1);
            // Find the end of the right subarray
            const rightEnd = Math.min(leftStart + 2 * currentSize - 1, n - 1);
            
            // Merge the two subarrays
            merge(arr, tempArray, leftStart, mid, rightEnd);
        }
    }
    return arr;
}

function merge(arr: number[], tempArray: number[], leftStart: number, mid: number, rightEnd: number) {
    let i = leftStart; // Starting index for left subarray
    let j = mid + 1; // Starting index for right subarray
    let k = leftStart; // Starting index to be merged

    // Merge the two subarrays into tempArray
    while (i <= mid && j <= rightEnd) {
        if (arr[i] <= arr[j]) {
            tempArray[k++] = arr[i++];
        } else {
            tempArray[k++] = arr[j++];
        }
    }

    // Copy remaining elements of left subarray if any
    while (i <= mid) {
        tempArray[k++] = arr[i++];
    }

    // Copy remaining elements of right subarray if any
    while (j <= rightEnd) {
        tempArray[k++] = arr[j++];
    }

    // Copy the merged subarray back into original array
    for (let i = leftStart; i <= rightEnd; i++) {
        arr[i] = tempArray[i];
    }
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
