function heapSort(arr: number[]): number[] {
    const n = arr.length;

    // Helper function to heapify a subtree rooted with node i
    function heapify(heap: number[], size: number, i: number): void {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        if (left < size && heap[left] > heap[largest]) {
            largest = left;
        }
        if (right < size && heap[right] > heap[largest]) {
            largest = right;
        }

        if (largest !== i) {
            [heap[i], heap[largest]] = [heap[largest], heap[i]];
            heapify(heap, size, largest);
        }
    }

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // Extract elements from heap one by one
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // move current root to end
        heapify(arr, i, 0); // heapify reduced heap
    }

    return arr;
}

// Example usage:
const array = [3, 1, 4, 1, 5, 9, 2, 6];
console.log(heapSort(array)); // [1, 1, 2, 3, 4, 5, 6, 9]
