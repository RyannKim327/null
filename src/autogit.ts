function mergeSort(arr: number[]): number[] {
    const n = arr.length;
    if (n <= 1) return arr; // If array is already sorted or empty

    // Create a temporary array to hold merged results
    let temp: number[] = new Array(n);

    // Current size of the subarrays to be merged
    let currentSize: number = 1;

    // Loop to merge subarrays of increasing sizes
    while (currentSize < n) {
        // Start merging from the beginning of the array
        let leftStart: number = 0;

        while (leftStart < n) {
            // Find the mid and right end for merging
            let mid: number = Math.min(leftStart + currentSize - 1, n - 1);
            let rightEnd: number = Math.min(leftStart + 2 * currentSize - 1, n - 1);

            // Merge the two halves
            merge(arr, temp, leftStart, mid, rightEnd);

            // Move to the next pair of subarrays
            leftStart += 2 * currentSize;
        }

        // Increase the size of subarrays
        currentSize *= 2;
    }

    return arr;
}

function merge(arr: number[], temp: number[], leftStart: number, mid: number, rightEnd: number): void {
    let left = leftStart; // Initial index of first subarray
    let right = mid + 1; // Initial index of second subarray
    let index = leftStart; // Initial index of merged subarray

    // Merge the two subarrays into temp array
    while (left <= mid && right <= rightEnd) {
        if (arr[left] <= arr[right]) {
            temp[index++] = arr[left++];
        } else {
            temp[index++] = arr[right++];
        }
    }

    // Copy the remaining elements of left subarray, if any
    while (left <= mid) {
        temp[index++] = arr[left++];
    }

    // Copy the remaining elements of right subarray, if any
    while (right <= rightEnd) {
        temp[index++] = arr[right++];
    }

    // Copy the merged subarray back into the original array
    for (let i = leftStart; i <= rightEnd; i++) {
        arr[i] = temp[i];
    }
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log("Sorted Array:", sortedArray);
