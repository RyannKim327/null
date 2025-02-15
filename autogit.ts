function heapSort(array: number[]): number[] {
    const n = array.length;

    // Build a max heap.
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(array, n, i);
    }

    // One by one extract elements from heap.
    for (let i = n - 1; i > 0; i--) {
        // Move current root to the end.
        [array[0], array[i]] = [array[i], array[0]]; // swap

        // Call heapify on the reduced heap.
        heapify(array, i, 0);
    }

    return array;
}

function heapify(array: number[], n: number, i: number): void {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // left = 2*i + 1
    const right = 2 * i + 2; // right = 2*i + 2

    // If left child is larger than root.
    if (left < n && array[left] > array[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far.
    if (right < n && array[right] > array[largest]) {
        largest = right;
    }

    // If largest is not root.
    if (largest !== i) {
        [array[i], array[largest]] = [array[largest], array[i]]; // swap

        // Recursively heapify the affected sub-tree.
        heapify(array, n, largest);
    }
}

// Example usage:
const arr = [3, 6, 8, 10, 1, 2, 1];
const sortedArray = heapSort(arr);
console.log(sortedArray); // Output: [1, 1, 2, 3, 6, 8, 10]
