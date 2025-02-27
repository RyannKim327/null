function mergeSort(arr: number[]): number[] {
    const n = arr.length;
    if (n < 2) return arr; // If the array is empty or has one element, it's already sorted.

    // Create a temporary array to hold the sorted elements
    const temp = new Array(n);

    // Start with a size of 1 and double it each iteration
    for (let size = 1; size < n; size *= 2) {
        for (let left = 0; left < n; left += size * 2) {
            const mid = Math.min(left + size, n);
            const right = Math.min(left + size * 2, n);
            merge(arr, temp, left, mid, right);
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

    // Copy the merged subarray back into the original array
    for (let index = left; index < right; index++) {
        arr[index] = temp[index];
    }
}

// Example usage
const array = [38, 27, 43, 3, 9, 82, 10];
const sortedArray = mergeSort(array);
console.log(sortedArray); // Output: [3, 9, 10, 27, 38, 43, 82]
