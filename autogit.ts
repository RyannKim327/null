function mergeSort(arr: number[]): number[] {
    const n = arr.length;
    if (n < 2) return arr; // No need to sort if array has less than 2 elements

    // Create a temporary array to hold merged results
    const temp: number[] = new Array(n);

    // Current size of the subarrays to merge
    for (let size = 1; size < n; size *= 2) {
        // Start merging from the beginning of the array
        for (let left = 0; left < n; left += 2 * size) {
            // Calculate the middle and right bounds of the current subarrays
            const mid = Math.min(left + size, n);
            const right = Math.min(left + 2 * size, n);

            // Merge the two subarrays
            merge(arr, temp, left, mid, right);
        }

        // Copy the merged result back to the original array
        for (let i = 0; i < n; i++) {
            arr[i] = temp[i];
        }
    }

    return arr;
}

function merge(arr: number[], temp: number[], left: number, mid: number, right: number) {
    let i = left;   // Starting index for the left subarray
    let j = mid;    // Starting index for the right subarray
    let k = left;   // Starting index to be merged

    // Merge both subarrays into temp[]
    while (i < mid && j < right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }

    // Copy the remaining elements of left subarray, if any
    while (i < mid) {
        temp[k++] = arr[i++];
    }

    // Copy the remaining elements of right subarray, if any
    while (j < right) {
        temp[k++] = arr[j++];
    }
}

// Example usage:
const arr = [38, 27, 43, 3, 9, 82, 10];
const sortedArr = mergeSort(arr);
console.log(sortedArr); // Output: [3, 9, 10, 27, 38, 43, 82]
