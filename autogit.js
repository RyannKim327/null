function heapSort(arr) {
    // build heap (rearrange array)
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, arr.length, i);
    }

    // extract elements from the heap one by one
    for (let i = arr.length - 1; i > 0; i--) {
        // move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
    return arr;
}

function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Example usage:
const arr = [12, 11, 13, 5, 6, 7];
console.log(heapSort(arr)); // Output: [ 5, 6, 7, 11, 12, 13 ]
