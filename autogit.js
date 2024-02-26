function heapSort(arr) {
    // Build max heap
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        heapify(arr, arr.length, i);
    }

    // Heap sort
    for (let i = arr.length - 1; i > 0; i--) {
        // Swapping root node with the last node
        let temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // Heapify the reduced heap
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
        let temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;

        heapify(arr, n, largest);
    }
}

// Example usage
const arr = [12, 11, 13, 5, 6, 7];
console.log(heapSort(arr));
