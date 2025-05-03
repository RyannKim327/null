function mergeSort(arr: number[]): number[] {
    const n = arr.length;
    if (n <= 1) return arr; // Base case: an array of 0 or 1 element is already sorted

    // Temporary array to help with merging
    const temp: number[] = new Array(n);

    // Iterate over the array incrementing the size of the subarrays to be merged
    for (let size = 1; size < n; size *= 2) {
        // Merge subarrays in pairs
        for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
            // Find the mid and the end of the subarray
            const mid = Math.min(leftStart + size, n);
            const rightEnd = Math.min(leftStart + 2 * size, n);
            
            // Merge the two sorted subarrays
            merge(arr, temp, leftStart, mid, rightEnd);
        }
    }

    return arr;
}

function merge(arr: number[], temp: number[], leftStart: number, mid: number, rightEnd: number) {
    let left = leftStart; // Starting index for the left subarray
    let right = mid; // Starting index for the right subarray
    let index = leftStart; // Starting index to be sorted

    // Merge the two subarrays into temp[]
    while (left < mid && right < rightEnd) {
        if (arr[left] <= arr[right]) {
            temp[index++] = arr[left++];
        } else {
            temp[index++] = arr[right++];
        }
    }

    // Copy remaining elements from the left subarray, if any
    while (left < mid) {
        temp[index++] = arr[left++];
    }

    // Copy remaining elements from the right subarray, if any
    while (right < rightEnd) {
        temp[index++] = arr[right++];
    }

    // Copy the sorted subarray back into the original array
    for (let i = leftStart; i < rightEnd; i++) {
        arr[i] = temp[i];
    }
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
