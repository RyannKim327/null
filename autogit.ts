function heapSort(arr: number[]): number[] {
    const n = arr.length;

    // Build a max heap
    const heapify = (arr: number[], n: number, i: number) => {
        let largest = i; // Initialize largest as root
        const left = 2 * i + 1; // left = 2*i + 1
        const right = 2 * i + 2; // right = 2*i + 2

        // If left child is larger than root
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        // If right child is larger than largest so far
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        // If largest is not root
        if (largest !== i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]]; // Swap

            // Recursively heapify the affected sub-tree
            heapify(arr, n, largest);
        }
    };

    // Create a max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // One by one extract elements from heap
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap
        heapify(arr, i, 0);
    }

    return arr;
}

// Example usage:
const array = [12, 11, 13, 5, 6, 7];
const sortedArray = heapSort(array);
console.log(sortedArray); // Output: [5, 6, 7, 11, 12, 13]
