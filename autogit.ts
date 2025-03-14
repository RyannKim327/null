function mergeSort(arr: number[]): number[] {
    const n = arr.length;
    if (n <= 1) return arr;

    // Create a temporary array to hold the sorted elements
    const temp = new Array(n);

    // Start with a size of 1 and double it each iteration
    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
            // Find the starting point of the two subarrays to merge
            const mid = Math.min(leftStart + size, n);
            const rightEnd = Math.min(leftStart + 2 * size, n);

            // Merge the two subarrays
            merge(arr, temp, leftStart, mid, rightEnd);
        }
        // Copy the sorted elements back into the original array
        for (let i = 0; i < n; i++) {
            arr[i] = temp[i];
        }
    }

    return arr;
}

function merge(arr: number[], temp: number[], leftStart: number, mid: number, rightEnd: number) {
    let left = leftStart; // Starting index for left subarray
    let right = mid;      // Starting index for right subarray
    let index = leftStart; // Starting index to be merged

    // Merge the two subarrays into temp
    while (left < mid && right < rightEnd) {
        if (arr[left] <= arr[right]) {
            temp[index++] = arr[left++];
        } else {
            temp[index++] = arr[right++];
        }
    }

    // Copy the remaining elements of the left subarray, if any
    while (left < mid) {
        temp[index++] = arr[left++];
    }

    // Copy the remaining elements of the right subarray, if any
    while (right < rightEnd) {
        temp[index++] = arr[right++];
    }
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
