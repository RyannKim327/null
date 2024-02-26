function heapSort(arr) {
    // Build a max heap
    function buildMaxHeap(arr) {
        const len = arr.length;
        for (let i = Math.floor(len / 2); i >= 0; i--) {
            heapify(arr, i, len);
        }
    }

    // Heapify function to maintain the heap property
    function heapify(arr, i, len) {
        const left = 2 * i + 1;
        const right = 2 * i + 2;
        let largest = i;

        if (left < len && arr[left] > arr[largest]) {
            largest = left;
        }

        if (right < len && arr[right] > arr[largest]) {
            largest = right;
        }

        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]];
            heapify(arr, largest, len);
        }
    }

    buildMaxHeap(arr);

    // Heap sort
    for (let i = arr.length - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, 0, i);
    }

    return arr;
}

// Example usage
const array = [4, 10, 3, 5, 1];
console.log(heapSort(array)); // Output: [1, 3, 4, 5, 10]
