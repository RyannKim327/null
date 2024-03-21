function mergeSort(arr) {
    const n = arr.length;
    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
            const mid = Math.min(leftStart + size - 1, n - 1);
            const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);
            merge(arr, leftStart, mid, rightEnd);
        }
    }
    return arr;
}

function merge(arr, leftStart, mid, rightEnd) {
    const left = arr.slice(leftStart, mid + 1);
    const right = arr.slice(mid + 1, rightEnd + 1);
    let i = 0, j = 0, k = leftStart;
    
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            arr[k] = left[i];
            i++;
        } else {
            arr[k] = right[j];
            j++;
        }
        k++;
    }
    
    while (i < left.length) {
        arr[k] = left[i];
        i++;
        k++;
    }
    
    while (j < right.length) {
        arr[k] = right[j];
        j++;
        k++;
    }
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]
