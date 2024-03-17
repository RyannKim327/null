function heapSort(arr) {
    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        // Swap the root (max value) of the heap with the last element of the heap
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, 0, i);
    }

    return arr;
}

function buildMaxHeap(arr) {
    for (let i = Math.floor(arr.length / 2); i >= 0; i--) {
        heapify(arr, i, arr.length);
    }
}

function heapify(arr, idx, max) {
    let largest = idx;
    const left = 2 * idx + 1;
    const right = 2 * idx + 2;

    if (left < max && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < max && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== idx) {
        [arr[idx], arr[largest]] = [arr[largest], arr[idx]];
        heapify(arr, largest, max);
    }
}

// Example usage
const arr = [12, 11, 13, 5, 6, 7];
console.log(heapSort(arr)); // Output: [5, 6, 7, 11, 12, 13]
