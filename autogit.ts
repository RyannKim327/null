function mergeSort(arr: number[]): number[] {
    const n = arr.length;
    let temp: number[] = new Array(n);
    
    // Current size of subarrays to be merged
    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n; leftStart += size * 2) {
            // Find the boundaries of the subarrays
            let mid = Math.min(leftStart + size, n);
            let rightEnd = Math.min(leftStart + size * 2, n);
            merge(arr, temp, leftStart, mid, rightEnd);
        }
    }
    
    return arr;
}

function merge(arr: number[], temp: number[], leftStart: number, mid: number, rightEnd: number): void {
    let left = leftStart;   // Starting index for left subarray
    let right = mid;        // Starting index for right subarray
    let index = leftStart;  // Starting index to be sorted

    // Merging the two sorted subarrays
    while (left < mid && right < rightEnd) {
        if (arr[left] <= arr[right]) {
            temp[index++] = arr[left++];
        } else {
            temp[index++] = arr[right++];
        }
    }

    // Copy remaining elements of left subarray, if any
    while (left < mid) {
        temp[index++] = arr[left++];
    }

    // Copy remaining elements of right subarray, if any
    while (right < rightEnd) {
        temp[index++] = arr[right++];
    }

    // Copy sorted subarray back to original array
    for (let i = leftStart; i < rightEnd; i++) {
        arr[i] = temp[i];
    }
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
