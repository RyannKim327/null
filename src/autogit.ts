function heapSort(arr: number[]): number[] {
    const n = arr.length;

    // Build a max-heap
    buildMaxHeap(arr, n);

    // One by one extract elements from the heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end (swap)
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // Call max heapify on the reduced heap
        maxHeapify(arr, 0, i);
    }

    return arr;
}

// Function to build a max heap
function buildMaxHeap(arr: number[], heapSize: number): void {
    // Start from the last parent node and heapify each
    for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
        maxHeapify(arr, i, heapSize);
    }
}

// To heapify a subtree rooted at index i
function maxHeapify(arr: number[], i: number, heapSize: number): void {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    // If left child exists and is greater than root
    if (left < heapSize && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child exists and is greater than current largest
    if (right < heapSize && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        // Recursively heapify the affected subtree
        maxHeapify(arr, largest, heapSize);
    }
}

// Example usage:
const arrayToSort = [12, 11, 13, 5, 6, 7];
console.log('Unsorted:', arrayToSort);
heapSort(arrayToSort);
console.log('Sorted:', arrayToSort);
Unsorted: [12, 11, 13, 5, 6, 7]
Sorted: [5, 6, 7, 11, 12, 13]
