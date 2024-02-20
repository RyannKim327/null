function heapSort(array) {
    buildMaxHeap(array);

    for (let i = array.length - 1; i > 0; i--) {
        // Swap the root (maximum value) of the heap with the last element of the heap
        [array[0], array[i]] = [array[i], array[0]];

        // Call heapify on the reduced heap
        heapify(array, 0, i);
    }

    return array;
}

function buildMaxHeap(array) {
    const n = array.length;

    // Start from the last non-leaf node to build the heap
    for (let i = Math.floor(n/2) - 1; i >= 0; i--) {
        heapify(array, i, n);
    }
}

function heapify(array, i, heapSize) {
    const left = 2*i + 1;
    const right = 2*i + 2;
    let largest = i;

    if (left < heapSize && array[left] > array[largest]) {
        largest = left;
    }

    if (right < heapSize && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]];
        heapify(array, largest, heapSize);
    }
}

// Example usage
const arr = [12, 11, 13, 5, 6, 7];
console.log(heapSort(arr)); // Output: [5, 6, 7, 11, 12, 13]
