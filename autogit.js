function heapSort(array) {
    function heapify(array, n, i) {
        let largest = i;
        let left = 2 * i + 1;
        let right = 2 * i + 2;

        if (left < n && array[left] > array[largest]) {
            largest = left;
        }

        if (right < n && array[right] > array[largest]) {
            largest = right;
        }

        if (largest !== i) {
            [array[i], array[largest]] = [array[largest], array[i]];
            heapify(array, n, largest);
        }
    }

    const n = array.length;

    // Build heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }

    // Extract elements one by one
    for (let i = n - 1; i > 0; i--) {
        [array[0], array[i]] = [array[i], array[0]]; // Swap root with last element
        heapify(array, i, 0); // Heapify root element
    }

    return array;
}

// Example usage
const array = [12, 11, 13, 5, 6, 7];
console.log("Original array: ", array);
console.log("Sorted array: ", heapSort(array));
