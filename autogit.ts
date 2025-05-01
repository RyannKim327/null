function merge<T>(arr: T[], left: number, mid: number, right: number): void {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);
  
    let i = 0, j = 0, k = left;
  
    while (i < leftArr.length && j < rightArr.length) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k++] = leftArr[i++];
        } else {
            arr[k++] = rightArr[j++];
        }
    }
  
    while (i < leftArr.length) {
        arr[k++] = leftArr[i++];
    }
  
    while (j < rightArr.length) {
        arr[k++] = rightArr[j++];
    }
}

function iterativeMergeSort<T>(arr: T[]): T[] {
    const n = arr.length;
    // Start with subarrays of size 1, then 2, 4, 8, ...
    for (let currSize = 1; currSize < n; currSize *= 2) {
        for (let leftStart = 0; leftStart < n - currSize; leftStart += 2 * currSize) {
            const mid = leftStart + currSize - 1;
            const rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);
            merge(arr, leftStart, mid, rightEnd);
        }
    }
    return arr;
}

// Example usage:
const nums = [38, 27, 43, 3, 9, 82, 10];
console.log(iterativeMergeSort(nums)); // [3, 9, 10, 27, 38, 43, 82]
