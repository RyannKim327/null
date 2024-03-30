function heapSort(array) {
    buildMaxHeap(array);

    for (let i = array.length - 1; i > 0; i--) {
        // Swap the root (maximum value) of the heap with the last element of the array
        let temp = array[0];
        array[0] = array[i];
        array[i] = temp;

        // Restore the max heap property
        maxHeapify(array, 0, i);
    }

    return array;
}

function buildMaxHeap(array) {
    for (let i = Math.floor(array.length / 2); i >= 0; i--) {
        maxHeapify(array, i, array.length);
    }
}

function maxHeapify(array, i, heapSize) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    if (left < heapSize && array[left] > array[largest]) {
        largest = left;
    }

    if (right < heapSize && array[right] > array[largest]) {
        largest = right;
    }

    if (largest !== i) {
        // Swap array[i] and array[largest]
        let temp = array[i];
        array[i] = array[largest];
        array[largest] = temp;

        // Recursively heapify the affected sub-tree
        maxHeapify(array, largest, heapSize);
    }
}

const array = [12, 11, 13, 5, 6, 7];
console.log("Before sorting:");
console.log(array);

console.log("\nAfter sorting:");
console.log(heapSort(array));
