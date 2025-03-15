function mergeSort(arr: number[]): number[] {
    const n = arr.length;
    if (n <= 1) return arr;

    // Create a temporary array to hold the sorted elements
    const temp = new Array(n);

    // Start with a size of 1 and double it each iteration
    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n; leftStart += 2 * size) {
            // Find the starting index of the left and right subarrays
            const left = leftStart;
            const mid = Math.min(left + size, n);
            const right = Math.min(left + 2 * size, n);

            // Merge the two subarrays
            merge(arr, temp, left, mid, right);
        }
        // Copy the sorted elements back into the original array
        for (let i = 0; i < n; i++) {
            arr[i] = temp[i];
        }
    }

    return arr;
}

function merge(arr: number[], temp: number[], left: number, mid: number, right: number): void {
    let i = left;   // Starting index for left subarray
    let j = mid;    // Starting index for right subarray
    let k = left;   // Starting index to be merged

    // Merge the two subarrays into temp[]
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

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
