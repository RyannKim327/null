function heapSort(arr) {
    // Build a max heap
    function buildMaxHeap(arr) {
        const n = arr.length;
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }
    }

    // Heapify a subtree rooted with node i which is an index in arr[]
    function heapify(arr, n, i) {
        let largest = i; // Initialize largest as root
        const left = 2 * i + 1;
        const right = 2 * i + 2;

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

    // Sort the array using heap sort
    function sort(arr) {
        const n = arr.length;
        buildMaxHeap(arr);

        for (let i = n - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            heapify(arr, i, 0);
        }
    }

    // Main function
    sort(arr);
    return arr;
}

// Example usage
const arr = [12, 11, 13, 5, 6, 7];
console.log(heapSort(arr)); // [5, 6, 7, 11, 12, 13]
