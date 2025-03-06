function heapSort(arr: number[]): number[] {
    const n = arr.length;

    // Helper function to heapify a subtree rooted at index i.
    const heapify = (i: number, length: number) => {
        let largest = i;  // Initialize largest as root
        const left = 2 * i + 1; // Left child index
        const right = 2 * i + 2; // Right child index

        // If left child is larger than root
        if (left < length && arr[left] > arr[largest]) {
            largest = left;
        }

        // If right child is larger than largest so far
        if (right < length && arr[right] > arr[largest]) {
            largest = right;
        }

        // If largest is not root
        if (largest !== i) {
            // Swap arr[i] with arr[largest]
            [arr[i], arr[largest]] = [arr[largest], arr[i]]; // ES6 destructuring swap

            // Recursively heapify the affected subtree
            heapify(largest, length);
        }
    };

    // Build a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(i, n);
    }

    // One by one extract elements from the heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end (swap)
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call heapify on the reduced heap
        heapify(0, i);
    }

    return arr;
}

// Example usage:
const array = [12, 11, 13, 5, 6, 7];
const sortedArray = heapSort(array);
console.log(sortedArray); // Output: [5, 6, 7, 11, 12, 13]
