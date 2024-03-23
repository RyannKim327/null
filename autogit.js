function mergeSortIterative(arr) {
    const n = arr.length;
    
    for (let currSize = 1; currSize < n; currSize *= 2) {
        for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * currSize) {
            let mid = Math.min(leftStart + currSize - 1, n - 1);
            let rightEnd = Math.min(leftStart + 2 * currSize - 1, n - 1);
            
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
        if (left[i] < right[j]) {
            arr[k++] = left[i++];
        } else {
            arr[k++] = right[j++];
        }
    }
    
    while (i < left.length) {
        arr[k++] = left[i++];
    }
    
    while (j < right.length) {
        arr[k++] = right[j++];
    }
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSortIterative(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]
