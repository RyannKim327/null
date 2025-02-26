function mergeSort(arr: number[]): number[] {
    const n = arr.length;

    // If the array is empty or has one element, return it
    if (n < 2) return arr;

    // Create a temporary array to hold the sorted elements
    const temp = new Array(n);

    // Iterate the size of the subarray from 1 to n
    for (let size = 1; size < n; size *= 2) {
        for (let left = 0; left < n; left += 2 * size) {
            // Find the starting and ending indices of the left and right subarrays
            const mid = Math.min(left + size, n);
            const right = Math.min(left + 2 * size, n);

            // Merge the subarrays
            merge(arr, temp, left, mid, right);
        }
        // Copy the sorted subarray back into the original array
        arr.splice(0, n, ...temp);
    }

    return arr;
}

function merge(arr: number[], temp: number[], left: number, mid: number, right: number) {
    let i = left;      // Starting index for left subarray
    let j = mid;       // Starting index for right subarray
    let k = left;      // Starting index to be merged

    // Merge the subarrays
    while (i < mid && j < right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }

    // Copy the remaining elements from the left subarray
    while (i < mid) {
        temp[k++] = arr[i++];
    }

    // Copy the remaining elements from the right subarray
    while (j < right) {
        temp[k++] = arr[j++];
    }
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
