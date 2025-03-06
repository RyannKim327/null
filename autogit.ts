function heapSort(arr: number[]): number[] {
    const length = arr.length;

    // Function to heapify a subtree rooted at index i
    function heapify(arr: number[], n: number, i: number) {
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

            // Recursively heapify the affected subtree
            heapify(arr, n, largest);
        }
    }

    // Build heap (rearrange array)
    for (let i = Math.floor(length / 2) - 1; i >= 0; i--) {
        heapify(arr, length, i);
    }

    // One by one extract elements from heap
    for (let i = length - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]]; // Swap

        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

// Example usage:
const arr = [3, 6, 1, 8, 4, 5];
const sortedArr = heapSort(arr);
console.log(sortedArr); // Output: [1, 3, 4, 5, 6, 8]
