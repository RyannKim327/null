function heapSort(arr: number[]): number[] {
    const n = arr.length;

    // Helper function to heapify a subtree rooted at index i
    const heapify = (heapSize: number, i: number): void => {
        let largest = i;
        const left = 2 * i + 1;
        const right = 2 * i + 2;

        // If left child is larger than root
        if (left < heapSize && arr[left] > arr[largest]) {
            largest = left;
        }

        // If right child is larger than current largest
        if (right < heapSize && arr[right] > arr[largest]) {
            largest = right;
        }

        // If largest is not root
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap
            heapify(heapSize, largest); // Heapify the root.
        }
    };

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(n, i);
    }

    // One by one extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]];
        // Call max heapify on the reduced heap
        heapify(i, 0);
    }

    return arr;
}

// Example usage:
const data = [3, 6, 5, 0, 8, 2, 1, 9, 7, 4];
console.log(heapSort(data)); // Sorted array
function heapSort<T>(arr: T[], compare: (a: T, b: T) => number): T[] { /* ... */ }
