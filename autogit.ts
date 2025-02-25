function mergeSort(arr: number[]): number[] {
    // Base case for empty or single-element arrays
    if (arr.length <= 1) return arr;

    const n = arr.length;
    // Create a temporary array to hold the sorted values
    const temp = new Array(n);
    
    // Iteratively merge subarrays of increasing size
    for (let size = 1; size < n; size *= 2) {
        for (let left = 0; left < n; left += size * 2) {
            const mid = Math.min(left + size, n); // mid point of the left array
            const right = Math.min(left + size * 2, n); // end of the right array

            // Merge the two halves
            merge(arr, temp, left, mid, right);
        }
        // Copy the sorted subarray back into the original array
        for (let i = 0; i < n; i++) {
            arr[i] = temp[i];
        }
    }
    
    return arr;
}

function merge(arr: number[], temp: number[], left: number, mid: number, right: number): void {
    let i = left;      // Starting index for left subarray
    let j = mid;       // Starting index for right subarray
    let k = left;      // Starting index to be merged in temp

    while (i < mid && j < right) {
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }

    // Copy remaining elements of the left subarray, if any
    while (i < mid) {
        temp[k++] = arr[i++];
    }

    // Copy remaining elements of the right subarray, if any
    while (j < right) {
        temp[k++] = arr[j++];
    }
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Sorted Array:", mergeSort(arr));
