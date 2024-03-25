function heapSort(arr) {
    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        // Swap root (max element) with the last element in the heap
        [arr[0], arr[i]] = [arr[i], arr[0]];
        maxHeapify(arr, 0, i);
    }

    return arr;
}

function buildMaxHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2); i >= 0; i--) {
        maxHeapify(arr, i, n);
    }
}

function maxHeapify(arr, i, n) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let largest = i;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        maxHeapify(arr, largest, n);
    }
}

// Example usage
const arr = [4, 10, 3, 5, 1];
console.log(heapSort(arr)); // Output: [1, 3, 4, 5, 10]
