// Heap Sort implementation in JavaScript
function heapSort(arr) {
    function maxHeapify(arr, n, i) {
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
            maxHeapify(arr, n, largest);
        }
    }

    function buildMaxHeap(arr) {
        const n = arr.length;

        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            maxHeapify(arr, n, i);
        }
    }

    function sort(arr) {
        const n = arr.length;

        buildMaxHeap(arr);

        for (let i = n - 1; i > 0; i--) {
            [arr[0], arr[i]] = [arr[i], arr[0]];
            maxHeapify(arr, i, 0);
        }
    }

    sort(arr);
    return arr;
}

// Example Usage
const array = [12, 11, 13, 5, 6, 7];
console.log("Original Array: ", array);
console.log("Sorted Array: ", heapSort(array.slice()));
