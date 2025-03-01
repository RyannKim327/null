function merge(arr: number[], left: number, mid: number, right: number): void {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);

    let i = 0; // Initial index of the first subarray
    let j = 0; // Initial index of the second subarray
    let k = left; // Initial index of merged subarray

    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        k++;
    }

    // Copy remaining elements of leftArr, if any
    while (i < leftArr.length) {
        arr[k] = leftArr[i];
        i++;
        k++;
    }

    // Copy remaining elements of rightArr, if any
    while (j < rightArr.length) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}

function mergeSort(arr: number[]): number[] {
    const n = arr.length;

    // Start with subarray size = 1
    for (let size = 1; size < n; size *= 2) {
        // Pick the starting point of different subarrays of current size
        for (let left = 0; left < n; left += size * 2) {
            // Find the mid and right bounds of the subarrays
            const mid = Math.min(left + size - 1, n - 1);
            const right = Math.min(left + 2 * size - 1, n - 1);
            
            // Merge the subarrays
            if (mid < right) {
                merge(arr, left, mid, right);
            }
        }
    }
    return arr;
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log("Unsorted array:", arr);
const sortedArr = mergeSort(arr);
console.log("Sorted array:", sortedArr);
