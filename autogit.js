function mergeSort(arr) {
    const n = arr.length;
    const aux = new Array(n);

    for (let size = 1; size < n; size *= 2) {
        for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * size) {
            const mid = Math.min(leftStart + size - 1, n - 1);
            const rightEnd = Math.min(leftStart + 2 * size - 1, n - 1);

            merge(arr, aux, leftStart, mid, rightEnd);
        }
    }

    return arr;
}

function merge(arr, aux, leftStart, mid, rightEnd) {
    let k = leftStart;
    let i = leftStart;
    let j = mid + 1;

    while (i <= mid && j <= rightEnd) {
        if (arr[i] <= arr[j]) {
            aux[k++] = arr[i++];
        } else {
            aux[k++] = arr[j++];
        }
    }
    
    while (i <= mid) {
        aux[k++] = arr[i++];
    }
    
    while (j <= rightEnd) {
        aux[k++] = arr[j++];
    }

    for (let idx = leftStart; idx <= rightEnd; idx++) {
        arr[idx] = aux[idx];
    }
}

// Example usage
const arr = [38, 27, 43, 3, 9, 82, 10];
console.log(mergeSort(arr)); // Output: [3, 9, 10, 27, 38, 43, 82]
